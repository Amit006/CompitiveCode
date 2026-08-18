function stoneGameV(stoneValue) {
    const n = stoneValue.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + stoneValue[i];

    const dp = Array.from({ length: n }, () => new Array(n).fill(0));

    for (let len = 2; len <= n; len++) { // taking two set 1st then length of set incresing 
        for (let l = 0; l + len - 1 < n; l++) {
            const r = l + len - 1;
            let best = 0;

            // Instead of looping all k, we can use prefix/suffix max arrays
            for (let k = l; k < r; k++) {
                const left = prefix[k + 1] - prefix[l];
                const right = prefix[r + 1] - prefix[k + 1];
                
                if (left < right) {
                    gain = left + dp[l][k];        // immediate left sum + future score from left subarray
                } else if (right < left) {
                    gain = right + dp[k + 1][r];     // immediate right sum + future score from right subarray
                } else {
                    gain = Math.max(left + dp[l][k], right + dp[k + 1][r]);
                }
                best = Math.max(best, gain);

            }

            dp[l][r] = best;
        }
    }
    return dp[0][n - 1];
}

console.log(stoneGameV([6, 2, 3, 4, 5, 5])); // Output: 18
console.log(stoneGameV([7, 7, 7, 7, 7, 7, 7])); // Output: 28