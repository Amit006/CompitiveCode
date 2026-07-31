/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  const freqs = new Array(26).fill(0);
    for(let i = 0; i < word.length; i++) {
        const id = word[i].charCodeAt(0) - 97;
        freqs[id]++;
    }
    freqs.sort((a, b) => b - a)
    let j = 1;
    let total = 0;
    for(let k = 0; k < 26; k++) {
        const mul = Math.ceil(j / 8);
        if(freqs[k] > 0) {
            total += mul * freqs[k];
            j++;
        }
    }
    return total;
};


console.log(minimumPushes("abcdefghijklmnopqrstuvwxyz")); // Output: 36
console.log(minimumPushes("codeforces")); // Output: 12