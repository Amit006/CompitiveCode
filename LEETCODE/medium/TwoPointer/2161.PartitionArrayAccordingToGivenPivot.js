
const partitionArray = (nums, pivot) => {
    const left = [];
    const middle = [];
    const right = [];

    for (const num of nums) {
        if (num < pivot) {
            left.push(num);
        } else if (num === pivot) {
            middle.push(num);
        } else {
            right.push(num);
        }
    }

    return [...left, ...middle, ...right];
};

console.log(partitionArray([9, 12, 5, 10, 14, 3, 10], 10)); // [9, 5, 3, 10, 10, 12, 14]
console.log(partitionArray([-3, 4, 3, 2], 2)); // [-3, 2, 4, 3]

// optimized version
var pivotArray = function (nums, pivot) {
    const n = nums.length;
    const res = new Int32Array(n);
    let lo = 0, hi = n - 1;
    for (let i = 0, j = n - 1; i < n; i++, j--) {
        if (nums[i] < pivot) res[lo++] = nums[i];   // front fills left→right (stable)
        if (nums[j] > pivot) res[hi--] = nums[j];   // back fills right→left (stable)
    }
    // everything between lo and hi is the pivot block
    while (lo <= hi) res[lo++] = pivot;
    return res;
};

console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10)); // [9, 5, 3, 10, 10, 12, 14]
console.log(pivotArray([-3, 4, 3, 2], 2)); // [-3, 2, 4, 3]