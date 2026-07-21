/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
    const stack = [];
    const seen = new Set();
    const freq = {};

    // Count frequencies
    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let ch of s) {
        freq[ch]--; // one occurrence used

        if (seen.has(ch)) continue; // skip if already in stack

        // Maintain increasing monotonic stack
        while (
            stack.length > 0 &&
            ch < stack[stack.length - 1] &&
            freq[stack[stack.length - 1]] > 0
        ) {
            seen.delete(stack.pop());
        }

        stack.push(ch);
        seen.add(ch);
    }

    return stack.join('');
};

console.log(smallestSubsequence("bcabc")); // Output: "abc"