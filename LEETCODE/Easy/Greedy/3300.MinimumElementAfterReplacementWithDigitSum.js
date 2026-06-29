/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
    let min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0, curr = nums[i];

        while (curr > 0) {
            if (sum > min) break;
            sum += curr % 10;
            curr = Math.floor(curr / 10);
        }

        if (sum < min) min = sum;
    }
    return min;
};


console.log(minElement([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 1
console.log(minElement([5, 10, 15])); // 1
console.log(minElement([0, 0, 0])); // 0