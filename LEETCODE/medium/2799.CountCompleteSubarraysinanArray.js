



const countCompleteSubarrays = function(nums) {
    const n = nums.length;
    const uniqueCount = new Set(nums).size;
    let count = 0;

    for (let i = 0; i < n; i++) {
        const seen = new Set();
        for (let j = i; j < n; j++) {
            seen.add(nums[j]);
            
            if (seen.size >= uniqueCount) {
                count++;
            }
            console.log(seen, count, i,j);
        }
    }

    return count;
}



// console.log(countCompleteSubarrays([1,3,1,2,2])); // Output: 7




/**
 * Counts the number of complete subarrays in the given array.
 * A complete subarray contains all unique elements from the original array.
 * @param {number[]} nums - The input array of numbers
 * @return {number} - The count of complete subarrays
 */
const countCompleteSubarrays1 = function(nums) {
    const n = nums.length;
    const uniqueElements = new Set(nums);
    const uniqueCount = uniqueElements.size;
    let count = 0;
    
    // If all elements are the same, every subarray is complete
    if (uniqueCount === 1) {
        return (n * (n + 1)) / 2;
    }
    
    // Sliding window approach
    const frequency = new Map();
    let left = 0;
    
    for (let right = 0; right < n; right++) {
        // Add current element to frequency map
        frequency.set(nums[right], (frequency.get(nums[right]) || 0) + 1);
        
        // While the window contains all unique elements
        while (frequency.size === uniqueCount) {
            // All subarrays starting from left and ending at or after right are complete
            count += n - right;
            console.log(count, frequency, left, right);
            // Shrink window from left
            const leftElement = nums[left];
            frequency.set(leftElement, frequency.get(leftElement) - 1);
            
            if (frequency.get(leftElement) === 0) {
                frequency.delete(leftElement);
            }
            
            left++;
        }
    }
    
    return count;
};

// Example usage
console.log(countCompleteSubarrays1([1,3,1,2,2])); // Output: 7
