
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const prefixSum = [0], suffixSum = [0], answerList =[];

    for(let i=0; i<nums.length-1; i++){
        prefixSum.push(prefixSum[i]  + nums[i]);
    }
 
//  3-3 = 0 
//  3 -2 = 1  
//  3- 1 =2
//  3-0 =3
    for(let k= nums.length-1; k > 0; k--){
        const index = (nums.length-1) - k;
        suffixSum.push(suffixSum[index] + nums[k]);
    }

    suffixSum.reverse();

    for(let j=0; j< nums.length; j++){
        answerList.push(Math.abs(prefixSum[j] - suffixSum[j]));
    }

    return answerList;
};

console.log(leftRightDifference([10,4,8,3])); // Output: [1, 5, 1, 11]
console.log(leftRightDifference([1])); // Output: [0]




// Optimized solution  

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    let left = 0;

    let res = [];
    const total = nums.reduce((acc, num) => acc + num, 0);

    for (let i = 0; i < nums.length; i++) {
        const right = total - (left + nums[i]);
        res.push(Math.abs(left - right));
        left += nums[i];
    }

    return res;
};

console.log(leftRightDifference([10, 4, 8, 3])); // Output: [1, 5, 1, 11]
console.log(leftRightDifference([1])); // Output: [0]