
const countSubarrays = function(nums, minK, maxK) {
    let minIndex = -1;
    let maxIndex = -1;
    let result = 0;
    let lastInvalidIndex = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < minK || nums[i] > maxK) {
            lastInvalidIndex = i;
        }
        if (nums[i] === minK) {
            minIndex = i;
        }
        if (nums[i] === maxK) {
            maxIndex = i;
        }
        result += Math.max(0, Math.min(minIndex, maxIndex) - lastInvalidIndex);
    }

    return result;
}

console.log(countSubarrays([1,3,5,2,7,5], 1, 5)); // 2
console.log(countSubarrays([1,2,3,4], 1, 4)); // 10
console.log(countSubarrays([1,2,3,4], 2, 3)); // 6


/*



2444. Count Subarrays With Fixed Bounds
Hard
Topics
Companies
Hint
You are given an integer array nums and two integers minK and maxK.

A fixed-bound subarray of nums is a subarray that satisfies the following conditions:

The minimum value in the subarray is equal to minK.
The maximum value in the subarray is equal to maxK.
Return the number of fixed-bound subarrays.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [1,3,5,2,7,5], minK = 1, maxK = 5
Output: 2
Explanation: The fixed-bound subarrays are [1,3,5] and [1,3,5,2].
Example 2:

Input: nums = [1,1,1,1], minK = 1, maxK = 1
Output: 10
Explanation: Every subarray of nums is a fixed-bound subarray. There are 10 possible subarrays.

*/