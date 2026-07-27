/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let max1 = -Infinity, max2 = - Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max1) {
            max2 = max1;
            max1 = nums[i];
        } else if (nums[i] <= max1 && nums[i] > max2) {
            max2 = nums[i];
        }
    }
    return (max1 - 1) * (max2 - 1);
};
console.log(maxProduct([3, 4, 5, 2])); // Output: 12
console.log(maxProduct([1, 5, 4, 5])); // Output: 16