/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var maxTotalValue = function(nums, k) {
    let maxVal = Math.max(...nums);
    let minVal = Math.min(...nums);

    return (maxVal - minVal) * k;
};

console.log(maxTotalValue([1, 2, 3], 3)); // Output: 6
console.log(maxTotalValue([5, 5, 5], 2)); // Output: 0