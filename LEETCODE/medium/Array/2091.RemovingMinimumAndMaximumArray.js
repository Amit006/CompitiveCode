var minimumDeletions = function (nums) {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return 1;

    let minIdx = 0, maxIdx = 0;
    for (let i = 1; i < n; i++) {
        if (nums[i] < nums[minIdx]) minIdx = i;
        if (nums[i] > nums[maxIdx]) maxIdx = i;
    }

    const lo = Math.min(minIdx, maxIdx);
    const hi = Math.max(minIdx, maxIdx);

    const removeFront = hi + 1;
    const removeBack = n - lo;
    const removeBoth = (lo + 1) + (n - hi);

    return Math.min(removeFront, removeBack, removeBoth);
};

console.log(minimumDeletions([2, 10, 7, 5, 4, 1, 8, 6])); // Output: 5
console.log(minimumDeletions([0, -4, 19, 1, 8, -2, -3, 5])); // Output: 3