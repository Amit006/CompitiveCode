/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
    const n = word.length;
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += Math.floor(i / 8) + 1;
    }
    return ans;
};

console.log(minimumPushes("abcdefghijklmnopqrstuvwxyz")); // Output: 36
console.log(minimumPushes("codeforces")); // Output: 12