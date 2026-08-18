/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    const map = new Map(); let maximum = 0, sum = 0;
    for (const x of nums) {
        const freq = map.get(x) || 0;
        map.set(x, freq + 1);
        maximum = maximum < (freq + 1) ? freq + 1 : maximum;
    }
    const arr = [...map.values()];
    for (let i = 0; i < arr.length; i++) if (arr[i] == maximum) sum += arr[i];
    return sum;
};

console.log(maxFrequencyElements([1, 2, 2, 3, 3, 3])); // Output: 3
console.log(maxFrequencyElements([1, 1, 2, 2, 2, 3])); // Output: 3