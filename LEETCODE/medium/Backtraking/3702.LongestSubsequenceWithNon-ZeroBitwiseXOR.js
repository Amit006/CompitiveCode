/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    let totalXor = 0;
    let hasNonZero = false;

    // Single pass to find total XOR and look for non-zero elements
    for (const num of nums) {
        totalXor ^= num;
        if (num !== 0) {
            hasNonZero = true;
        }
    }

    // Case 1: The array contains only zeros
    if (!hasNonZero) {
        return 0;
    }

    // Case 2: The full array already has a non-zero XOR sum
    if (totalXor !== 0) {
        return nums.length;
    }

    // Case 3: Total XOR is 0, drop exactly 1 non-zero element
    return nums.length - 1;
};


console.log(longestSubsequence([1, 2, 3])); // Output: 2
console.log(longestSubsequence([0, 0, 0])); // Output: 0
console.log(longestSubsequence([1, 0, 0])); // Output: 1



// # backtracking to go through all the possible subsequences and find the longest one with non-zero XOR sum.

const longestSubsequenceBacktracking = (nums) => {

    let maxLength = 0;

    const backtrack = (index, currentXor, currentLength) => {
        if (index === nums.length) {
            if (currentXor !== 0) {
                maxLength = Math.max(maxLength, currentLength);
            }
            return;
        }

        // Include the current element
        backtrack(index + 1, currentXor ^ nums[index], currentLength + 1);

        // Exclude the current element
        backtrack(index + 1, currentXor, currentLength);
    };

    backtrack(0, 0, 0);
    return maxLength;
};


console.log(longestSubsequenceBacktracking([1, 2, 3])); // Output: 2
console.log(longestSubsequenceBacktracking([0, 0, 0])); // Output: 0
console.log(longestSubsequenceBacktracking([1, 0, 0])); // Output: 1