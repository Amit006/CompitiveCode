/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let index = 0;

  for (const i of nums) {
    const remaining = target - i;
    if (nums.includes(remaining)) {
      let remainingIndex = nums.lastIndexOf(remaining);
      if (index != remainingIndex) return [index, remainingIndex];
    }

    index++;
  }
};

let input = [2, 7, 11, 15],
  target = 9;
let input2 = [0, 4, 3, 0],
  target2 = 0;
console.log(twoSum(input2, target2));

// Optimized approach using hashmap
var twoSumOptimized = function (nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
  return [];
};
console.log(twoSumOptimized(input2, target2));
