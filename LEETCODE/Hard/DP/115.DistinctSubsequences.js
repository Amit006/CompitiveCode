function numDistinct(s, t) {
    const m = s.length;
    const n = t.length;
    
    // Create an (m + 1) x (n + 1) matrix filled with 0
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    
    // Base case: An empty target string t ("") can always be formed 
    // from any prefix of s in exactly 1 way (by deleting all characters).
    for (let i = 0; i <= m; i++) {
        dp[i][0] = 1;
    }
    
    // Fill the grid row by row
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // Note: s[i-1] and t[j-1] because the DP table is 1-indexed 
            // relative to the string characters.
            if (s[i - 1] === t[j - 1]) {
                // Match: Sum of matching this char (diagonal) + ignoring this char (up)
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            } else {
                // Mismatch: Carry over the result from the row above (up)
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    
    // The bottom-right corner holds the total distinct subsequences
    return dp[m][n];
}

console.log(numDistinct("rabbbit", "rabbit")); // Output: 3
console.log(numDistinct("babgbag", "bag")); // Output: 5