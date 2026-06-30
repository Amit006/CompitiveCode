/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    let totalFreq = 0, freq = new Array(3).fill(0);

    for (let left = 0, right = 0; right < s.length; right++) {
        freq[s.charCodeAt(right) - 97]++;

        while(freq[0] >= 1 && freq[1] >= 1 && freq[2] >= 1) {
            totalFreq += s.length - right;
            freq[s.charCodeAt(left) - 97]--;
            left++;
        }

    }
    return totalFreq;
};

console.log(numberOfSubstrings("abcabc")); // 10
console.log(numberOfSubstrings("aaacb")); // 3