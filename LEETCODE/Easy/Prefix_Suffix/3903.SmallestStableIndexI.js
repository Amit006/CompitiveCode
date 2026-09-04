/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
    if (!nums.length ) return -1;

    const n = nums.length;
    const prefixMax = new Array(n);
    const suffixMin = new Array(n);

    // Build prefix max
    prefixMax[0] = nums[0];
    for (let i = 1; i < n; i++) {
        prefixMax[i] = Math.max(prefixMax[i - 1], nums[i]);
    }

    // Build suffix min
    suffixMin[n - 1] = nums[n - 1];
    for (let j = n - 2; j >= 0; j--) {
        suffixMin[j] = Math.min(suffixMin[j + 1], nums[j]);
    }

    // Find first stable index
    for (let s = 0; s < n; s++) {
        if (prefixMax[s] - suffixMin[s] <= k) return s;
    }

    return -1;
};

console.log(firstStableIndex([1, 3, 2, 4, 5], 2)); // Output: 2
console.log(firstStableIndex([5, 4, 3, 2, 1], 0)); // Output: -1