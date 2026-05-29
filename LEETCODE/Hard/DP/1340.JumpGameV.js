/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function(arr, d) {
    const n = arr.length;
    const dp = new Array(n).fill(-1);

    function dfs(i) {
        if (dp[i] !== -1)
            return dp[i];

        let best = 1;

        // we are looking into forward 
        for (let nxt = i + 1; nxt < Math.min(n, i + d + 1); nxt++) {
            if (arr[nxt] >= arr[i])
                break;

            best = Math.max(best, 1 + dfs(nxt));
        }

        // we are Looking into backward 
        for (let nxt = i - 1; nxt > Math.max(-1, i - d - 1); nxt--) {
            if (arr[nxt] >= arr[i])
                break;

            best = Math.max(best, 1 + dfs(nxt));
        }

        dp[i] = best;
        return dp[i];
    }

    return Math.max(...arr.map((_, i) => dfs(i)));
};


console.log(maxJumps([6, 4, 14, 6, 8, 13, 9, 7, 10, 6, 12], 2)); // 4
console.log(maxJumps([3, 3, 3, 3, 3], 3)); // 1
console.log(maxJumps([7, 6, 5, 4, 3, 2, 1], 1)); // 7