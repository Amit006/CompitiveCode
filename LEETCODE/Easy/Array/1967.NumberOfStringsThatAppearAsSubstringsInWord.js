/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let ans = 0;

    for (const str of patterns) {
        if (word.indexOf(str) !== -1) {
            ans++;
        }
    }

    return ans;
};

console.log(numOfStrings(["a","abc","bc","d"], "abc")); // Output: 3
console.log(numOfStrings(["a","b","c"], "aaaaabbbbb"));