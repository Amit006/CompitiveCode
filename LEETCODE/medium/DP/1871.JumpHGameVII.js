/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */

//  Sliding Window + DP + Prefix Sum
var canReach = function (s, minJump, maxJump) {
    const n = s.length;
    const dp =  new Unit8Array(n).fill(0); // dp[i] will be 1 if we can reach index i, otherwise 0
    dp[0] = s[0] === "0"; // we can start from index 0 if it's '0'
    dp[0] = 1;

    let cp = 0; // count of reachable indices in the current window
    for (let i = 1; i < n; i++) {
        if (!dp[i]) continue; // if we can't reach index i, skip it

        // we can jump from any index in the range [i - maxJump, i - minJump]
        if (i >= minJump) {
            cp += dp[i - minJump] ? 1 : 0; // if we can reach i - minJump, increment count
        }

        if (i >= maxJump + 1) {
            cp -= dp[i - maxJump - 1] ? 1 : 0; // if we can reach i - maxJump - 1, decrement count
        }

        dp[i] = cp > 0 && s[i] === "0"; // we can reach index i if there's at least one reachable index in the window and s[i] is '0'
    }

    return dp[n - 1];
};

// console.log(canReach("011010", 2, 3)); // true
console.log(canReach("01101110", 2, 3)); // false



// DP + sliding window as we are using a queue to keep track of the reachable indices 
// and we are also using a variable to keep track of the farthest index we have reached so far, 
// which is similar to the sliding window technique. The BFS part comes from the fact that 
// we are exploring all possible jumps from each reachable index in a breadth-first manner.

const canReachV2 = function (s, minJump, maxJump) {
    const n = s.length;
    let queue = [0], farthest = 0; // the farthest index we have reached so far

    for(let i = 0; i < queue.length; i++) {
        const start = queue[i],
        left = Math.max(start + minJump, farthest + 1), // the left boundary of the next jump
        right = Math.min(start + maxJump, n - 1);

        for(let j = left; j <= right; j++) {
            if(s[j] === '0') {
                if(j === n - 1) return true; // if we can reach the last index, return true
                queue.push(j);
            }
        }
        farthest = Math.max(farthest, start + right); // update the farthest index we have reached
    }
   
    return false; // if we exhaust the queue without reaching the last index, return false
};

console.log(canReachV2("011010", 2, 3)); // true
console.log(canReachV2("01101110", 2, 3)); // false
console.log(canReachV2("0000000000", 2, 3)); // true
console.log(canReachV2("011111000111000001011111010", 6, 8)); // true