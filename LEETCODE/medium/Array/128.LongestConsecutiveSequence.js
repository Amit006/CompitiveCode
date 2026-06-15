var longestConsecutive = function (nums) {
    const set = new Set(nums);
    let max = 0;

    for (const n of set) {
        if (!set.has(n - 1)) {
            let curr = n, length = 1;
            while (set.has(curr + 1)) {
                curr++;
                length++;
            }
            if (length > max) max = length;
        }
    }

    return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Output: 9