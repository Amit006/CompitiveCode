/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
// we will use DP approach
var canReach = function (s, minJump, maxJump) {
    const n = s.length;
    const dp = new Array(n).fill(false);
    dp[0] = s[0] === "0"; // we can start from index 0 if it's '0'
    dp[0] = 1;

    let cp = 0; // count of reachable indices in the current window
    for (let i = 1; i < n; i++) {
        if (!dp[i]) continue; // if we can't reach index i, skip it

        // we can jump from any index in the range [i - maxJump, i - minJump]
        if(i >= minJump) {
            cp += dp[i - minJump] ? 1 : 0; // if we can reach i - minJump, increment count
        }

        if(i >= maxJump + 1) {
            cp -= dp[i - maxJump - 1] ? 1 : 0; // if we can reach i - maxJump - 1, decrement count
        }

        dp[i] = cp > 0 && s[i] === "0"; // we can reach index i if there's at least one reachable index in the window and s[i] is '0'

    }

    return dp[n - 1];
};

// console.log(canReach("011010", 2, 3)); // true
console.log(canReach("01101110", 2, 3)); // false
