const Redis = require('ioredis');

class SmartCache {
  constructor(opts = {}) {
    this.redis = new Redis(opts.redisUrl || 'redis://localhost:6379');
    // L1 in-process cache: Map<key, {value, expiresAt}>
    this.l1 = new Map();
    this.l1Ttl = opts.l1TtlMs ?? 2000;        // short-lived, absorbs hot reads
    this.l1Max = opts.l1Max ?? 1000;
    // in-flight promises for single-flight (per-process dedupe)
    this.inflight = new Map();
    this.lockTtlMs = opts.lockTtlMs ?? 5000;
    this.hotReplicas = opts.hotReplicas ?? 4;
  }

  // ---- key construction: canonical composite key ----
  buildKey(namespace, params = {}) {
    const canonical = Object.keys(params)
      .sort()
      .map(k => {
        let v = params[k];
        if (Array.isArray(v)) v = [...v].sort().join(',');
        return `${k}=${String(v).toLowerCase()}`;
      })
      .join(':');
    return canonical ? `${namespace}:${canonical}` : namespace;
  }

  // ---- TTL with jitter ----
  _jitter(baseSec, ratio = 0.1) {
    const delta = baseSec * ratio;
    return Math.round(baseSec + (Math.random() * 2 - 1) * delta);
  }

  // ---- envelope: store softExpiry inside, hard TTL on the Redis key ----
  _wrap(value, softTtlSec) {
    return JSON.stringify({ v: value, soft: Date.now() + softTtlSec * 1000 });
  }
  _unwrap(raw) {
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  }

  // ---- L1 helpers ----
  _l1Get(key) {
    const e = this.l1.get(key);
    if (!e) return null;
    if (Date.now() > e.expiresAt) { this.l1.delete(key); return null; }
    return e.value;
  }
  _l1Set(key, value) {
    if (this.l1.size >= this.l1Max) {
      // crude LRU-ish: drop oldest inserted
      this.l1.delete(this.l1.keys().next().value);
    }
    this.l1.set(key, { value, expiresAt: Date.now() + this.l1Ttl });
  }

  // ---- hot-key read: pick a random replica suffix ----
  _hotKey(key, i) { return `${key}:replica:${i}`; }

  async get(namespace, params, loader, {
    ttlSec = 300,            // hard TTL (Redis key)
    softTtlSec = 240,        // logical freshness; < ttlSec
    hot = false,             // replicate across N keys
  } = {}) {
    const key = this.buildKey(namespace, params);

    // 1. L1
    const l1 = this._l1Get(key);
    if (l1 !== null) return l1;

    // 2. Redis (hot keys read a random replica)
    const readKey = hot
      ? this._hotKey(key, Math.floor(Math.random() * this.hotReplicas))
      : key;
    const env = this._unwrap(await this.redis.get(readKey));

    if (env) {
      this._l1Set(key, env.v);
      // soft-expired -> serve stale, refresh in background (stale-while-revalidate)
      if (Date.now() > env.soft) {
        this._refresh(key, loader, { ttlSec, softTtlSec, hot }).catch(() => {});
      }
      return env.v;
    }

    // 3. miss -> single-flight load
    return this._refresh(key, loader, { ttlSec, softTtlSec, hot });
  }

  // single-flight: dedupe concurrent loads in this process + Redis lock across processes
  async _refresh(key, loader, { ttlSec, softTtlSec, hot }) {
    if (this.inflight.has(key)) return this.inflight.get(key);

    const p = (async () => {
      const lockKey = `${key}:lock`;
      const gotLock = await this.redis.set(lockKey, '1', 'PX', this.lockTtlMs, 'NX');

      if (!gotLock) {
        // someone else is rebuilding; brief wait then serve whatever's there
        await new Promise(r => setTimeout(r, 50));
        const env = this._unwrap(await this.redis.get(key));
        if (env) return env.v;
        // fall through and load anyway to avoid starving
      }

      try {
        const value = await loader();
        const wrapped = this._wrap(value, softTtlSec);
        const hardTtl = this._jitter(ttlSec);

        if (hot) {
          const pipe = this.redis.pipeline();
          for (let i = 0; i < this.hotReplicas; i++) {
            pipe.set(this._hotKey(key, i), wrapped, 'EX', this._jitter(ttlSec));
          }
          await pipe.exec();
        } else {
          await this.redis.set(key, wrapped, 'EX', hardTtl);
        }

        this._l1Set(key, value);
        return value;
      } finally {
        if (gotLock) await this.redis.del(lockKey);
      }
    })();

    this.inflight.set(key, p);
    try { return await p; }
    finally { this.inflight.delete(key); }
  }

  // ---- delete-on-write invalidation ----
  async invalidate(namespace, params, { hot = false } = {}) {
    const key = this.buildKey(namespace, params);
    this.l1.delete(key);
    if (hot) {
      const pipe = this.redis.pipeline();
      for (let i = 0; i < this.hotReplicas; i++) pipe.del(this._hotKey(key, i));
      await pipe.exec();
    } else {
      await this.redis.del(key);
    }
  }

  // ---- group invalidation by namespace prefix (SCAN, not KEYS) ----
  async invalidateNamespace(namespace) {
    let cursor = '0';
    do {
      const [next, keys] = await this.redis.scan(
        cursor, 'MATCH', `${namespace}:*`, 'COUNT', 200,
      );
      cursor = next;
      if (keys.length) await this.redis.del(...keys);
    } while (cursor !== '0');
    // clear matching L1 entries
    for (const k of this.l1.keys()) {
      if (k.startsWith(namespace + ':') || k === namespace) this.l1.delete(k);
    }
  }
}

module.exports = SmartCache;