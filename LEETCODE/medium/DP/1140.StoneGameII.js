
/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function (piles) {
    const n = piles.length;

    // Step 1: Precompute suffix sums
    const suffix = new Array(n + 1).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        suffix[i] = suffix[i + 1] + piles[i];
    }

    // Step 2: Initialize DP table with -1 (uncomputed)
    const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(-1));

    // Step 3: Recursive function with memoization
    function solve(i, M) {
        if (i >= n) return 0; // no piles left
        if (dp[i][M] !== -1) return dp[i][M]; // already computed

        let best = 0;
        for (let X = 1; X <= 2 * M && i + X <= n; X++) {
            // Opponent plays optimally from (i+X, max(M,X))
            const opponent = solve(i + X, Math.max(M, X));
            best = Math.max(best, suffix[i] - opponent);
        }

        dp[i][M] = best;
        return best;
    }

    // Step 4: Answer is solve(0,1)
    return solve(0, 1);
};

console.log(stoneGameII([2, 7, 9, 4, 4])); // Output: 10
console.log(stoneGameII([1, 2, 3, 4, 5, 100])); // Output: 104
console.log(stoneGameII([1, 2, 3, 4, 5, 6])); // Output: 12