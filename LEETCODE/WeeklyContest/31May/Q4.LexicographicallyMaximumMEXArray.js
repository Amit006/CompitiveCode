/**
 * @param {number[]} nums
 * @return {number[]}
 */

var maximumMEX = function (nums) {
    const n = nums.length;
    const dralunetic = nums;

    // Track frequency of remaining elements
    const freq = new Map();
    for (const v of nums) freq.set(v, (freq.get(v) || 0) + 1);

    // Compute initial globalMEX
    let globalMEX = 0;
    while ((freq.get(globalMEX) || 0) > 0) globalMEX++;

    const result = [];
    let pos = 0;

    while (pos < n) {
        if (globalMEX === 0) {
            // 0 absent → MEX is 0 regardless of k, take k=1
            result.push(0);
            const v = nums[pos++];
            freq.set(v, freq.get(v) - 1);
            // globalMEX stays 0 (0 was absent, removing any element keeps it absent)

        } else {
            // Find smallest k covering {0, 1, ..., globalMEX-1}
            const seen = new Set();
            let k = 0;
            while (seen.size < globalMEX) {
                const v = nums[pos + k++];
                if (v < globalMEX) seen.add(v);
            }
            result.push(globalMEX);

            // Remove consumed elements from freq
            for (let i = pos; i < pos + k; i++) {
                freq.set(nums[i], freq.get(nums[i]) - 1);
            }
            pos += k;

            // Recompute globalMEX from scratch
            globalMEX = 0;
            while ((freq.get(globalMEX) || 0) > 0) globalMEX++;
        }
    }

    return result;
};

console.log(maximumMEX([0, 1, 0])); // [2, 1]
//console.log(maximumMEX([1, 0, 2])); // [3]
//console.log(maximumMEX([3, 1])); //    [0, 0]