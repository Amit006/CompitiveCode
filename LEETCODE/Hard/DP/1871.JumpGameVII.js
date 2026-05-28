// 1871. Jump Game VII
// Given a string s of 0's and 1's and two integers minJump and maxJump, you can jump from index i to index j if the following conditions are fulfilled:
// i + minJump <= j <= min(i + maxJump, s.length - 1) and
// s[j] == '0'.
// Return true if you can reach index s.length - 1 in s starting from index 0, or false otherwise.

// dp + sliding window solution
const canReach = function (s, minJump, maxJump) {
    const n = s.length;
    if (s[n - 1] !== "0") return false;

    const dp = new Uint8Array(n);
    dp[0] = 1; // Base case: the starting index is reachable

    let reachableCount = 0;

    for (let i = 1; i < n; i++) {
        // Add elements entering the sliding window from the right side
        if (i >= minJump) {
            if (dp[i - minJump] === 1) reachableCount++;
        }

        // Remove elements exiting the sliding window from the left side
        if (i > maxJump) {
            if (dp[i - maxJump - 1] === 1) reachableCount--;
        }

        // If the current slot is '0' and we have an available jump path
        if (s[i] === "0" && reachableCount > 0) {
            dp[i] = 1;
        }
    }

    return dp[n - 1] === 1;
};

console.log(canReach("011010", 2, 3)); // true
console.log(canReach("01101110", 2, 3)); // false
console.log(canReach("0000000000", 2, 3)); // true
