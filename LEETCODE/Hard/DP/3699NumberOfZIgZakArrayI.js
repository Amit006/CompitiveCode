/**
 * @param {number} n
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var zigZagArrays = function (n, l, r) {
    const MOD = 1_000_000_007n;

    // Normalize range to [0, m]
    const m = r - l;              // range size - 1
    
    // dp[v] = number of valid sequences ending at value v
    // Initialize: all single elements are valid
    let dp = new Array(m + 1).fill(1n);

    for (let i = 1; i < n; i++) {
        const newDp = new Array(m + 1).fill(0n);

        if (i % 2 === 1) {
            // Odd step → current must be GREATER than previous
            // newDp[v] = sum of dp[0..v-1]  (all prev values strictly less than v)
            // Use running prefix sum left → right
            let prefix = 0n;
            for (let v = 0; v <= m; v++) {
                newDp[v] = prefix;              // sum of dp[j] for j < v
                prefix = (prefix + dp[v]) % MOD;
            }
        } else {
            // Even step → current must be LESS than previous
            // newDp[v] = sum of dp[v+1..m]  (all prev values strictly greater than v)
            // Use running suffix sum right → left
            let suffix = 0n;
            for (let v = m; v >= 0; v--) {
                newDp[v] = suffix;              // sum of dp[j] for j > v
                suffix = (suffix + dp[v]) % MOD;
            }
        }

        dp = newDp;
    }

    // Sum all endings, multiply by 2:
    // every sequence has a mirror (flip up/down), so odd-step and even-step
    // starts are symmetric — we computed only one direction, double it
    let total = 0n;
    for (const count of dp) {
        total = (total + count) % MOD;
    }

    return Number(total * 2n % MOD);
};

console.log(zigZagArrays(3, 4, 5)); // Output: 2
console.log(zigZagArrays(3, 1, 3)); // Output: 10
