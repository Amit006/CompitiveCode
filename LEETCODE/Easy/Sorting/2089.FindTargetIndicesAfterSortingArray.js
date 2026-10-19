/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
   let lessThanTarget = 0;
    let targetCount = 0;

    for (const num of nums) {
        if (num < target) {
            lessThanTarget++;
        } else if (num === target) {
            targetCount++;
        }
    }

    const res = [];
    for (let i = 0; i < targetCount; i++) {
        res.push(lessThanTarget + i);
    }

    return res;
};


console.log(targetIndices([1, 2, 5, 2, 3], 2)); // Output: [1, 2]

const  targetIndices2 = (nums, target) => {
    const sorted = nums.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === target) {
            result.push(i);
        }
    }
    return result;
}

console.log(targetIndices2([1, 2, 5, 2, 3], 2)); // Output: [1, 2]