/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

const isPalindrome = (str, left, right) => {
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
};

var maxPalindromes = function (s, k) {
    const n = s.length;
    if (n === 0 || k === 0 || k > n) return 0;
    if (k === 1) return n;

    let count = 0;
    let start = 0;

    while (start + k <= n) {
        if (isPalindrome(s, start, start + k - 1)) {
            count++;
            start += k;
        } else if (start + k + 1 <= n && isPalindrome(s, start, start + k)) {
            count++;
            start += k + 1;
        } else {
            start++;
        }
    }

    return count;
};
console.log(maxPalindromes("abaccdbbd", 3)); // Output: 2
console.log(maxPalindromes("adbcda", 2)); // Output: 0
console.log(maxPalindromes("sjbxiufnaanqkwsqswkqrcznzcddhtuhtthuttjfuufjtcfywgecegwyhhnnhtozczirynhhnyrire", 3)); // Output: 5