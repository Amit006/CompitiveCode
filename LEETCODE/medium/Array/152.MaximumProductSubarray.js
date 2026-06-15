/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0], min = nums[0], result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let n = nums[i];
        if (n < 0) {
            let t = max; max = min; min = t;
        }

        max = Math.max(n, max * n);
        min = Math.min(n, min * n);

        if (max > result) result = max;
    }

    return result;
};


console.log(maxProduct([2,3,-2,4])); // Output: 6
console.log(maxProduct([-2,0,-1])); // Output: 0