/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let startPtr = i + 1;
        let endPtr = nums.length - 1;

        
        while (startPtr < endPtr) {

            let sum = nums[i] + nums[startPtr] + nums[endPtr];

            if (sum < 0) {
                startPtr++;
            } else if (sum > 0)
                endPtr--;
            else {

                result.push([nums[i], nums[startPtr], nums[endPtr]]);

                while (startPtr < endPtr && nums[startPtr] === nums[startPtr + 1]) startPtr++;
                while (startPtr < endPtr && nums[endPtr] === nums[endPtr - 1]) endPtr--;
                startPtr++;
                endPtr--;
            }

        };

    };
    return result;
};


const input = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(input));
const input2 = [0, 1, 1];
console.log(threeSum(input2));
const input3 = [0, 0, 0];
console.log(threeSum(input3));
const input4 = [-2, 0, 1, 1, 2];
console.log(threeSum(input4));
const input5 = [-1, 0, 1, 0];
console.log(threeSum(input5));

// Optimized Solution
// The above solution is already optimized with O(n^2) time complexity
// Further optimization is not possible for this problem as we need to check each pair of numbers to find the triplets that sum to zero.