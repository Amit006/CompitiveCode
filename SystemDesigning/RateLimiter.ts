type ClientBucket = {
  tokens: number;
  lastRefill: number;
};

class RateLimiter {
  private capacity: number;
  private refillRate: number; // tokens per millisecond
  private clients: Map<string, ClientBucket>;

  constructor(requestsPerSecond: number, capacity: number) {
    this.capacity = capacity;
    this.refillRate = requestsPerSecond / 1000; // convert to tokens/ms
    this.clients = new Map();
  }

  private refillTokens(bucket: ClientBucket) {
    const now = Date.now();
    const elapsed = now - bucket.lastRefill;
    const refillTokens = elapsed * this.refillRate;
    bucket.tokens = Math.min(this.capacity, bucket.tokens + refillTokens);
    bucket.lastRefill = now;
  }

  public allowRequest(clientId: string): boolean {
    let bucket = this.clients.get(clientId);

    if (!bucket) {
      bucket = { tokens: this.capacity, lastRefill: Date.now() };
      this.clients.set(clientId, bucket);
    }

    this.refillTokens(bucket);

    if (bucket.tokens >= 1) {
      bucket.tokens -= 1;
      return true;
    } else {
      return false;
    }
  }
}

// Usage example in an Express middleware
import express from "express";

const app = express();
const limiter = new RateLimiter(5, 5);  // 5 requests per second max, bucket size 5

app.use((req, res, next) => {
  const clientIp = req.ip || 'unknown';

  if (limiter.allowRequest(clientIp)) {
    next();
  } else {
    res.status(429).send("Too Many Requests - Rate limit exceeded");
  }
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
