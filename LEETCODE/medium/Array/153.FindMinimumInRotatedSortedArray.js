/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const assert = require('node:assert');

const bSearchMin = (arr) => {
    let left = 0;
    let right = arr.length - 1;
   

    while (left < right) {
        // Corrected mid calculation formula
        const mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] < arr[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }

    }

    return { min: arr[right], index: right }
}


const reverse = function (List, start, end) {

   // i starts at the front, j starts at the back
    // The loop runs as long as they haven't crossed (i < j)
    for (let i = start, j = end; i < j; i++, j--) {
        const temp = List[i];
        List[i] = List[j];
        List[j] = temp;
    }
    return List;
}


var findMin = function (nums) {
    const { min, index } = bSearchMin(nums)
    // console.log(index, min);
    //  nums.sort((a,b)=> b -a);

    // now we implement rotation;
     nums = reverse(nums, 0, index-1);
        

     nums = reverse(nums, index, nums.length-1);

     nums =reverse(nums, 0, nums.length-1);
  

    return nums[0];
};      

const input = [3,4,5,1,2];
const input2 = [4,5,6,7,0,1,2];
const input3 = [11,13,15,17];


assert.strictEqual(findMin(input), 1),  "error 1";
assert.strictEqual(findMin(input2), 0,  "error 2");
assert.strictEqual(findMin(input3), 11, "error 3");

