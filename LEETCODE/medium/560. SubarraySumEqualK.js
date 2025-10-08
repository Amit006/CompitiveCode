var subarraySum = function (nums, k) {
    let count = 0,
        subHash = new Map([[0, 1]]),
        sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        const remaining = sum - k;
        if (subHash.get(remaining)) {
            count += subHash.get(remaining);
        } else subHash.set(sum, (subHash.get(sum) || 0) + 1);
    }
    return count;
};

// const nums = [1, 2, 1, 2, 1];
const nums2 = [1, 2, 3];
const k = 3;
// console.log(subarraySum(nums2, k));

const subArraySum2 = (nums, k) => {
    let count = 0,
        subHash = new Map([[0, 1]]),
        sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        // If (sum - k) has been seen before, add its count to result
        if (subHash.has(sum - k)) {
            count += subHash.get(sum - k);
        }
        // Update the count for current sum in the map
        subHash.set(sum, (subHash.get(sum) || 0) + 1);
    }
    return count;
};

console.log(subarraySum2(nums2, k));