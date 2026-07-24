/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
    const m = Math.max(...nums);

    let size = 1;

    while (size <= m) {
        size <<= 1;
    }

    const one = Array(size).fill(false);
    const two = Array(size).fill(false);
    const three = Array(size).fill(false);

    for (const x of nums) {
        one[x] = true;

        for (let y = 0; y < size; y++) {
            if (one[y]) {
                two[y ^ x] = true;
            }
        }
    }

    for (const x of nums) {
        for (let y = 0; y < size; y++) {
            if (two[y]) {
                three[y ^ x] = true;
            }
        }
    }

    let result = 0;

    for (const value of three) {
        if (value) {
            result++;
        }
    }

    return result;
};

console.log(uniqueXorTriplets([1, 2, 3])); // Output: 4
console.log(uniqueXorTriplets([1, 1, 2])); // Output: 3