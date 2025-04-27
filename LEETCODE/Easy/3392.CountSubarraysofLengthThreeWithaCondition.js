
/*
3392. Count Subarrays of Length Three With a Condition
Easy
Topics
Companies
Hint
Given an integer array nums, return the number of subarrays of length 3 such that the sum of the first and third numbers equals exactly half of the second number.



*/


const countSubarrays = function(nums) {
    let count = 0;
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i - 1] + nums[i + 1] === 2 * nums[i]) {
            count++;
        }
    }
    return count;
}


console.log(countSubarrays([1, 2, 3, 4])); // 1
console.log(countSubarrays([1, 2, 3, 4, 5])); // 2
console.log(countSubarrays([7, 1, 3, 4, 1, 7])); // 2