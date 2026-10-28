/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    const n = grid[0].length, S = 1024;
    // Slot 0 is an always-empty "column -1", so column j lives at (j + 1) * S.
    const dp = new Uint8Array((n + 1) * S);
    const tmp = new Uint8Array(S);
    dp[S] = 1;                                   // XOR 0 at the start of column 0

    for (const row of grid)
        for (let j = 0; j < n; j++) {
            const o = (j + 1) * S, v = row[j];
            for (let x = 0; x < S; x++)
                tmp[x ^ v] = dp[o + x] | dp[o - S + x];   // from above | from the left
            dp.set(tmp, o);
        }

    return dp.subarray(n * S).indexOf(1);
};

console.log(minCost([[1,2],[3,4]])) // 0