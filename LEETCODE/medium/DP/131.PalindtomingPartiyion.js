function partition(s) {
    const n = s.length;
    const isPal = Array.from({ length: n }, () => Array(n).fill(false));

    // Step 1: Fill palindrome table
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            if (s[i] === s[j] && (j - i < 2 || isPal[i + 1][j - 1])) {
                isPal[i][j] = true;
            }
        }
    }

    // Step 2: DP for partitions
    const dp = Array.from({ length: n }, () => []);
    for (let i = 0; i < n; i++) {
        if (isPal[0][i]) {
            dp[i].push([s.slice(0, i + 1)]);
        }
        for (let j = 1; j <= i; j++) {
            if (isPal[j][i]) {
                const right = s.slice(j, i + 1);
                for (const leftPartition of dp[j - 1]) {
                    dp[i].push([...leftPartition, right]);
                }
            }
        }
    }

    // ✅ Make sure to return the final partitions
    return dp[n - 1];
}

console.log(partition("aab")); // Output: [["a","a","b"],["aa","b"]]
console.log(partition("a")); // Output: [["a"]]
console.log(partition("aaaaaaaaaaaaaaaaab")); // Output: [["a","b"]]