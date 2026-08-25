/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function (nums, k) {
    const hashSet = new Set(nums);
    for (let i = 1; i <= 101; i++) {
        if (hashSet.has(k * i)) continue;
        return k * i;
    }
    return 0;
};

console.log(missingMultiple([1, 2, 3, 4, 5], 2)); // 6
console.log(missingMultiple([2, 4, 6, 8], 2)); // 1
