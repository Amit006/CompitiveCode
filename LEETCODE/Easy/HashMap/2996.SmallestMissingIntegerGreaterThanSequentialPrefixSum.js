/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function(nums) {
    let sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            sum += nums[i];
        } else {
            break;
        }
    }

    const seen = new Set(nums);

    let answer = sum;

    while (seen.has(answer)) {
        answer++;
    }

    return answer;
};


console.log(missingInteger([1, 2, 3, 4, 5])); // Output: 15
console.log(missingInteger([1, 2, 3, 5]));    // Output: 6