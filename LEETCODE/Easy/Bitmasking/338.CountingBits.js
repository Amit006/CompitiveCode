/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    const dp = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
        dp[i] = dp[i >> 1] + (i & 1);
    }
    return dp;
};
console.log(countBits(5)); // Output: [0,1,1,2,1,2]