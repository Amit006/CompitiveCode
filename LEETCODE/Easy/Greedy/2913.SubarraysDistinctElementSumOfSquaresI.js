/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let totalSum = 0;
    const n = nums.length;
    
    // Loop through every possible starting point
    for (let i = 0; i < n; i++) {
        const distinctElements = new Set();
        
        // Expand the subarray to the right
        for (let j = i; j < n; j++) {
            distinctElements.add(nums[j]);
            
            // Get the count of distinct values, square it, and add to sum
            const count = distinctElements.size;
            totalSum += count * count;
        }
    }
    
    return totalSum;
};

console.log(sumCounts([1, 2, 1])); // Output: 15