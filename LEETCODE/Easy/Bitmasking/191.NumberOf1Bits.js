/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (nums){
    let count =0;

    while(nums !==0){
        nums = nums & nums-1; 
        count++;
    }
    return count;
}

console.log(hammingWeight(11)); // Output: 3
console.log(hammingWeight(128)); // Output: 1