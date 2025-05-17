/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// need to write sort function 
var sortColors = function(nums) {
     const result = [nums[0]];
     const n = nums.length;
     for(let i=1; i<n; i++){
            let j= 0;
            while(j<result.length && nums[i]>result[j]){
                j++;
            }
            result.splice(j, 0, nums[i]);
     }
     return result;      
};

console.log(sortColors([2,0,2,1,1,0])) // [0,0,1,1,2,2]
// Time Complexity: O(n^2)