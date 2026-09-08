// 3904. Smallest Stable Index II
// Prefix max and suffix min; first index with pmax - smin <= k. O(n).
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
  const n = nums.length;
  const smin = new Float64Array(n);
  smin[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) smin[i] = Math.min(nums[i], smin[i + 1]);
  let pmax = -Infinity;
  for (let i = 0; i < n; i++) {
    pmax = Math.max(pmax, nums[i]);
    if (pmax - smin[i] <= k) return i;
  }
  return -1;
};

console.log(firstStableIndex([5,0,1,4], 3)); // 3
console.log(firstStableIndex([3,2,1], 1)); // -1