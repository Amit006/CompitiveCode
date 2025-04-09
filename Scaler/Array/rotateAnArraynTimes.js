/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */


// 4ms 
var rotateAnArrayNTimes = function(nums, k) {
    // Method 1: Using reverse technique (current implementation)
    k = k % nums.length; // Handle cases where k is greater than the length of the array
    
    // No need to rotate if k is 0 or array is empty
    if (k === 0 || nums.length <= 1) return nums;
    
    reverse(nums, 0, nums.length - 1); // Reverse the entire array
    reverse(nums, 0, k - 1); // Reverse the first k elements
    reverse(nums, k, nums.length - 1); // Reverse the remaining elements
    
    function reverse(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
            start++;
            end--;
        }
    }
    
    return nums;   
};

/**
 * Alternative O(n) approach using cyclic replacement
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]} The rotated array
 */

// 1ms
var rotateArrayCyclic = function(nums, k) {
    const n = nums.length;
    k = k % n; // Handle cases where k is greater than the length
    
    // No need to rotate if k is 0 or array is empty
    if (k === 0 || n <= 1) return nums;
    
    let count = 0; // Count of elements rotated
    
    for (let start = 0; count < n; start++) {
        let current = start;
        let prev = nums[start];
        
        do {
            // Calculate the next position
            const next = (current + k) % n;
            
            // Save the value at the next position
            const temp = nums[next];
            
            // Place the previous value at its correct position
            nums[next] = prev;
            
            // Update variables for next iteration
            prev = temp;
            current = next;
            count++;
        } while (start !== current);
    }
    
    return nums;
};

// Example usage:
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(rotateAnArrayNTimes(arr, 3)); // [5, 6, 7, 1, 2, 3, 4]
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// console.log(rotateArrayCyclic(arr2, 3)); // [5, 6, 7, 1, 2, 3, 4]
