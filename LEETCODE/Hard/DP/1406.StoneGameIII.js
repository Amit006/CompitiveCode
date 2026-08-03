const keyFn = i => i;

const memoize = (fn, keyFn) => {
    const cache = new Map();
    return (...args) => {
        const key = keyFn(...args);
        if (!cache.has(key)) cache.set(key, fn(...args));
        return cache.get(key);
    }
}

const stoneGameIII = A => {
    const n = A.length;

    const maxDiff = memoize(i => {
        if (i === n) return 0;
        let a = -5e7, b = -5e7, c = -5e7;

        if (i < n) a = A[i] - maxDiff(i + 1);
        if (i + 1 < n) b = A[i] + A[i + 1] - maxDiff(i + 2);
        if (i + 2 < n) c = A[i] + A[i + 1] + A[i + 2] - maxDiff(i + 3);
        
        return Math.max(a, b, c);
    }, keyFn);

    const d = maxDiff(0);
    const res = ["Bob", "Tie", "Alice"];
    return res[(d > 0) - (d < 0) + 1];
};

console.log(stoneGameIII([1, 2, 3, 7]));
console.log(stoneGameIII([1, 2, 3, -9]));
console.log(stoneGameIII([1, 2, 3, 6]));
