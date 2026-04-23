/**
 * @param {number[]} arr
 * @return {number[]}
 */
var getDistances = function(nums) {
     const result = new Array(nums.length).fill(0);
    const hashIndex = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!hashIndex.has(nums[i])) hashIndex.set(nums[i], []);
        hashIndex.get(nums[i]).push(i);
    }

    for (const indices of hashIndex.values()) {
        const len = indices.length;
        let prefixSum = 0;

        // left contribution: sum of (indices[j] - indices[k]) for all k < j
        for (let j = 0; j < len; j++) {
            result[indices[j]] += j * indices[j] - prefixSum;
            prefixSum += indices[j];
        }

        let suffixSum = 0;

        // right contribution: sum of (indices[k] - indices[j]) for all k > j
        for (let j = len - 1; j >= 0; j--) {
            result[indices[j]] += suffixSum - (len - 1 - j) * indices[j];
            suffixSum += indices[j];
        }


    }

    return result;
};