/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let missingNum =0;
    for(let i=0; i<=nums.length; i++){
        missingNum^=i;
        if(i-1 < nums.length) missingNum^= nums[i];
    }
    return missingNum;
};

console.log(missingNumber([3,0,1])); // Output: 2