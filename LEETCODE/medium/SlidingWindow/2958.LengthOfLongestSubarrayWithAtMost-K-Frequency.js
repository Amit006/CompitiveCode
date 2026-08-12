/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
    const freq = Object.create(null); // faster than {}
    let left = 0, maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        const val = nums[right];
        freq[val] = (freq[val] || 0) + 1;

        if (freq[val] > k) {
            // shrink only when needed
            while (freq[val] > k) {
                const leftVal = nums[left++];
                freq[leftVal]--;
            }
        }

        const len = right - left + 1;
        if (len > maxLen) maxLen = len; // avoid Math.max overhead
    }

    return maxLen;
};

console.log(maxSubarrayLength([1, 2, 3, 1, 2, 3], 2)); // Output: 5
console.log(maxSubarrayLength([1, 2, 3, 4, 5], 1)); // Output: 5