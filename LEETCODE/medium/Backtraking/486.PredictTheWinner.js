
const memoize = (fn, keyFn) => {
    const cache = new Map();
    return (...args) => {
        const key = keyFn(...args);
        if (!cache.has(key)) cache.set(key, fn(...args));
        return cache.get(key);
    }
}

const predictTheWinner = A => {
    const n = A.length;
    if (!(n & 1)) return true;

    const maxDiff = memoize(
        (i, j) => {
            if (i === j) return A[i];
            return Math.max(A[i] - maxDiff(i + 1, j),
                            A[j] - maxDiff(i, j - 1));
        },
        (i, j) => (i << 16) | j
    );

    return maxDiff(0, n - 1) >= 0;
};

console.log(predictTheWinner([1, 5, 2])); // false
console.log(predictTheWinner([1, 5, 233, 7])); // true