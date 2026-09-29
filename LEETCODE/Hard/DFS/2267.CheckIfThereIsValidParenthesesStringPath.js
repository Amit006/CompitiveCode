/**
 * @param {character[][]} grid
 * @return {boolean}
 */

const _memoize = (fn, keyFn) => {
    const cache = new Map();
    return (...args) => {
        const key = keyFn(...args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
};

const hasValidPath = A => {
    // 1. Guard against empty inputs
    if (!A || !A.length || !A[0].length) return false;

    const m = A.length;
    
    // 2. Ensure matrix is valid and uniform across all rows
    const n = A[0].length;
    for (let i = 1; i < m; i++) {
        if (A[i].length !== n) return false;
    }

    // 3. Path length must be even (m + n - 1 steps)
    // 4. Start must be '(' (even ASCII) and End must be ')' (odd ASCII)
    if ((m + n - 1) % 2 !== 0 || (A[0][0].charCodeAt() & 1) !== 0 || (A[m - 1][n - 1].charCodeAt() & 1) !== 1) {
        return false;
    }

    const dfs = _memoize(
        (i, j, x) => {
            // '(' increases balance x by +1, ')' decreases by -1
            x += 1 - ((A[i][j].charCodeAt() & 1) << 1);

            // Prune if balance drops below 0 or exceeds remaining available steps
            if (x < 0 || x > (m - 1 - i) + (n - 1 - j)) {
                return false;
            }

            // Target reached: return true if balance is perfectly matched (x === 0)
            if (i === m - 1 && j === n - 1) {
                return x === 0;
            }

            // Explore Down and Right
            return (i < m - 1 && dfs(i + 1, j, x)) || (j < n - 1 && dfs(i, j + 1, x));
        },
        (i, j, x) => `${i},${j},${x}`
    );

    return Boolean(dfs(0, 0, 0));
};

// Example usage with a valid 4x8 rectangular grid
const rectangularGrid = [
    ["(", "(", ")", "(", "(", ")", ")", "("],
    [")", ")", ")", ")", ")", ")", ")", ")"],
    ["(", "(", ")", "(", "(", ")", ")", "("],
    [")", ")", ")", ")", ")", ")", ")", ")"]
];

console.log(hasValidPath(rectangularGrid));