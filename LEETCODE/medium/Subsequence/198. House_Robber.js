/*

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxSubSequence = (nums, index, cache) => {
    if (index < 0) return 0;

    if (cache[index] != -1) return cache[index];

    const pick = nums[index] + findMaxSubSequence(nums, index - 2, cache);
    const notPick = 0 + findMaxSubSequence(nums, index - 1, cache);
    cache[index] = Math.max(pick, notPick);

    return cache[index];


    // return Math.max(findMaxSubSequence(nums, index - 1), nums[index] + findMaxSubSequence(nums, index - 2));
}


var findMaxSubSequenceTabular = (nums, index, cache) => {
    for (let i = 2; i < nums.length; i++) {
        cache[i] = Math.max(cache[i - 1], nums[i] + cache[i-2]);
    }
    return cache[nums.length-1];
}

var spaceOptimiztionF = (nums) => {
    let prev = nums[0];
    let prev2 = Math.max(nums[0], nums[1]);

    for(let i =2; i<nums.length; i++){
        const current = Math.max(prev2, nums[i]+ prev);

        prev = prev2
        prev2 = current
    }

    return prev2;
}


var rob = function (nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    // Track two states: best up to i-2 and best up to i-1
    const DP = new Array(nums.length).fill(-1);
    DP[0] = nums[0];
    DP[1] = Math.max(nums[0], nums[1]);

    // return findMaxSubSequence(nums, nums.length - 1, DP);
    // return findMaxSubSequenceTabular(nums, 0, DP);
    return spaceOptimiztionF(nums);
};

/*

1) we have implemented recursion fn
2) Now we need to use DP to come out of Time Limit Exceeded
3) We try to do with tabular form 
4) Now we will do space Optimization 

*/
