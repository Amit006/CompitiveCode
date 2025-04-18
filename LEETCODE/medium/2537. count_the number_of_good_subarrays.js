/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
    let count = 0;
    let left = 0;
    let pairs = 0;
    const freqMap = new Map();
    const n = nums.length;

    for (let right = 0; right < n; right++) {
        const num = nums[right];
        const prevFreq = freqMap.get(num) || 0;
        pairs += prevFreq;
        freqMap.set(num, prevFreq + 1);

        while (pairs >= k) {
            count += (n - right);
            const numLeft = nums[left];
            freqMap.set(numLeft, freqMap.get(numLeft) - 1);
            pairs -= (freqMap.get(numLeft) || 0);
            left++;
        }
    }

    return count;
};

console.log(countGood([1, 2, 1, 2, 3], 2)); // Output: 7
console.log(countGood([1, 1, 1, 1], 3)); // Output: 1
console.log(countGood([1, 2, 3, 4], 1)); // Output: 10
console.log(countGood([1, 2, 3, 4], 2)); // Output: 6
console.log(countGood([1, 2, 3, 4], 3)); // Output: 3



/*

2537. Count the Number of Good Subarrays
Solved
Medium
Topics
Companies
Hint
Given an integer array nums and an integer k, return the number of good subarrays of nums.

A subarray arr is good if there are at least k pairs of indices (i, j) such that i < j and arr[i] == arr[j].

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,1,1,1,1], k = 10
Output: 1
Explanation: The only good subarray is the array nums itself.
Example 2:

Input: nums = [3,1,4,3,2,2,4], k = 2
Output: 4
Explanation: There are 4 different good subarrays:
- [3,1,4,3,2,2] that has 2 pairs.
- [3,1,4,3,2,2,4] that has 3 pairs.
- [1,4,3,2,2,4] that has 2 pairs.
- [4,3,2,2,4] that has 2 pairs.
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i], k <= 109


*/


