/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
    let answer = "";
    let left = 0;
    let ones = 0;

    for (let right = 0; right < s.length; right++) {
        if (s[right] === '1') {
            ones++;
        }

        while (ones > k) {
            if (s[left] === '1') {
                ones--;
            }
            left++;
        }

        while (ones === k && s[left] === '0') {
            left++;
        }

        if (ones === k) {
            const candidate = s.substring(left, right + 1);

            if (
                answer === "" ||
                candidate.length < answer.length ||
                (candidate.length === answer.length && candidate < answer)
            ) {
                answer = candidate;
            }
        }
    }

    return answer;
};
console.log(shortestBeautifulSubstring("001100111", 2)); // Output: "11"
console.log(shortestBeautifulSubstring("0000", 1)); // Output: ""