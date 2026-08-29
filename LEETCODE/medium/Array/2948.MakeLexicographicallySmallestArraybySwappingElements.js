/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function(nums, limit) {
    const n = nums.length;
    const idx = Array.from({length: n}, (_, i) => i);
    idx.sort((a, b) => nums[a] - nums[b]);

    const result = new Array(n);
    let i = 0;
    while (i < n) {
        let j = i;
        while (j + 1 < n && nums[idx[j + 1]] - nums[idx[j]] <= limit) j++;

        const groupIndices = idx.slice(i, j + 1).sort((a, b) => a - b);
        for (let k = 0; k < groupIndices.length; k++) {
            result[groupIndices[k]] = nums[idx[i + k]];
        }
        i = j + 1;
    }
    return result;
};

console.log(lexicographicallySmallestArray([3, 7, 1, 6], 3)); // Output: [1, 3, 6, 7]
console.log(lexicographicallySmallestArray([1, 2, 3, 4], 0)); // Output: [1, 2, 3, 4]