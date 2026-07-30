
// Formula LCS(i, j) = LCS(i-1, j-1) + 1 if text1[i] == text2[j]
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {

    let m = text1.length; n = text2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[m][n];
};


console.log(longestCommonSubsequence("abcde", "ace")); // 3
console.log(longestCommonSubsequence("abc", "abc")); // 3



// optimal substructure
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequenceSingleRow = function (text1, text2) {
    let a = text1, b = text2;
    if (a.length < b.length) { a = text2; b = text1; }
    const M = a.length, N = b.length;
    if (N === 0) return 0;

    const codesA = new Int32Array(M), codesB = new Int32Array(N);
    for (let i = 0; i < M; i++) codesA[i] = a.charCodeAt(i);
    for (let j = 0; j < N; j++) codesB[j] = b.charCodeAt(j);

    const dp = new Int32Array(N + 1);

    for (let i = 1; i <= M; i++) {
        const ca = codesA[i - 1];
        let diag = 0;
        for (let j = 1; j <= N; j++) {
            const temp = dp[j];
            dp[j] = ca === codesB[j - 1] ? diag + 1 : Math.max(dp[j], dp[j - 1]);
            diag = temp;
        }
    }
    return dp[N];
};
console.log(longestCommonSubsequenceSingleRow("abcde", "ace")); // 3
console.log(longestCommonSubsequenceSingleRow("abc", "abc")); // 3