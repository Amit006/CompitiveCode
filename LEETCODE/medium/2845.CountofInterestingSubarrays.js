/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function(nums, modulo, k) {
    // Convert the array to 1s and 0s based on the condition
    const binaryArray = nums.map(num => num % modulo === k ? 1 : 0);
    
    // Calculate the count of interesting subarrays
    let result = 0;
    let prefixSum = 0;
    const prefixSumCount = new Map();
    prefixSumCount.set(0, 1); // Empty subarray
    
    for (const bit of binaryArray) {
        prefixSum = (prefixSum + bit) % modulo;
        
        // For a subarray to be interesting, we need:
        // (prefixSum_j - prefixSum_i) % modulo = k
        // This means we're looking for previous prefix sums where:
        // prefixSum_i % modulo = (prefixSum_j - k + modulo) % modulo
        const target = ((prefixSum - k) % modulo + modulo) % modulo;
        
        // Add the count of subarrays that end at current position
        if (prefixSumCount.has(target)) {
            result += prefixSumCount.get(target);
        }
        
        // Update the frequency map
        prefixSumCount.set(prefixSum, (prefixSumCount.get(prefixSum) || 0) + 1);
    }
    
    return result;
};

// Test cases
const testCases = [
    { nums: [2,3,4,6], modulo: 2, k: 1, expected: 1 },
    { nums: [1,2,3,4], modulo: 2, k: 1, expected: 4 },
    { nums: [3,1,9,6], modulo: 3, k: 0, expected: 2 }
];

for (const { nums, modulo, k, expected } of testCases) {
    const result = countInterestingSubarrays(nums, modulo, k);
    console.log(`Input: nums = [${nums}], modulo = ${modulo}, k = ${k}`);
    console.log(`Output: ${result}`);
    console.log(`Expected: ${expected}`);
    console.log(`Correct: ${result === expected ? "Yes" : "No"}`);
    console.log("---");
}
