/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function (nums) {
    const arr1 = [nums[0]], arr2 = [nums[1]];
    for (let i = 2; i < nums.length; i++) {
        if (arr1[arr1.length - 1] > arr2[arr2.length - 1]) arr1.push(nums[i])
        else arr2.push(nums[i]);
    }
    return arr1.concat(arr2);
};

console.log(resultArray([2, 1, 3, 3]));
console.log(resultArray([5, 4, 3, 8]));