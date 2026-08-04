/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
    // O(n log n) time, O(1) space — better when range >> n
    nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = nums[i] + 1; j < nums[i + 1]; j++) {
            result.push(j);
        }
    }
    return result;
};


console.log(findMissingElements([4, 2, 1, 6])); // [3, 5]
console.log(findMissingElements([1, 2, 3, 4])); // []