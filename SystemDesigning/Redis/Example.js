const SmartCache = require('./SmartCache');

// ---- a tiny fake data source so this file runs on its own ----
// In a real app, `db` would be your Postgres/Mongo/etc. client.
const db = {
  async loadFeed(userId, { page, sort }) {
    console.log(`[db] loadFeed(${userId}, page=${page}, sort=${sort})`);
    await new Promise(r => setTimeout(r, 100)); // simulate query latency
    return {
      userId,
      page,
      sort,
      items: Array.from({ length: 5 }, (_, i) => `post-${page}-${i}`),
    };
  },

  async loadProfile(userId) {
    console.log(`[db] loadProfile(${userId})`);
    await new Promise(r => setTimeout(r, 100));
    return { userId, name: `User ${userId}`, followers: 1_000_000 };
  },

  async updateProfile(userId, patch) {
    console.log(`[db] updateProfile(${userId})`, patch);
    await new Promise(r => setTimeout(r, 50));
    return { userId, ...patch };
  },
};

async function main() {
  const cache = new SmartCache({ redisUrl: 'redis://localhost:6379' });

  // read with cache-aside + stampede protection
  const feed = await cache.get(
    'user:1234:feed',
    { page: 2, sort: 'recent', lang: 'EN' },     // canonicalized internally
    () => db.loadFeed(1234, { page: 2, sort: 'recent' }),
    { ttlSec: 300, softTtlSec: 240 }
  );
  console.log('feed:', feed);

  // second read of the same key should hit the cache (no [db] log)
  const feedAgain = await cache.get(
    'user:1234:feed',
    { page: 2, sort: 'recent', lang: 'EN' },
    () => db.loadFeed(1234, { page: 2, sort: 'recent' }),
    { ttlSec: 300, softTtlSec: 240 }
  );
  console.log('feedAgain (cached):', feedAgain);

  // a celebrity profile — replicate to spread the hot key
  const profile = await cache.get(
    'user:99:profile', {},
    () => db.loadProfile(99),
    { ttlSec: 600, softTtlSec: 540, hot: true }
  );
  console.log('profile:', profile);

  // on write: invalidate, don't update
  const patch = { name: 'User 99 (renamed)' };
  await db.updateProfile(99, patch);
  await cache.invalidate('user:99:profile', {}, { hot: true });
  console.log('invalidated user:99:profile');

  // invalidate a whole group
  await cache.invalidateNamespace('user:1234:feed');
  console.log('invalidated namespace user:1234:feed');

  // close the Redis connection so the process can exit
  await cache.redis.quit();
}

main().catch(err => {
  console.error('example failed:', err);
  process.exit(1);
});
