/**
 * @param {number[]} nums
 * @return {number[]}
 */


var maximumMEX = function(nums) {
    const n = nums.length;
    const dralunetic = nums;

    const freq     = new Int32Array(100002);
    const inWindow = new Uint8Array(100002);  // replaces Set
    for (const v of nums) freq[v]++;

    let globalMEX = 0;
    while (freq[globalMEX] > 0) globalMEX++;

    const result = [];
    let pos = 0;

    while (pos < n) {
        if (globalMEX === 0) {
            result.push(0);
            freq[nums[pos++]]--;
        } else {
            let needed = globalMEX, k = 0;

            while (needed > 0) {
                const v = nums[pos + k++];
                if (v < globalMEX && !inWindow[v]) {
                    inWindow[v] = 1;
                    needed--;
                }
            }
            result.push(globalMEX);

            for (let i = pos; i < pos + k; i++) {
                const v = nums[i];
                freq[v]--;
                if (v < globalMEX && freq[v] === 0) globalMEX = v; // inline MEX drop
                inWindow[v] = 0;                                     // reset for next step
            }
            pos += k;
        }
    }
    return result;
};

console.log(maximumMEX([0, 1, 2, 3, 4])); // [5]
console.log(maximumMEX([0, 1, 2, 2, 3])); // [4, 3]
console.log(maximumMEX([1, 2, 3]));       // [0, 0, 0]