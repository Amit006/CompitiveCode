/**
 * @param {number[]} nums
 * @return {number}
 */
 const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
var findGCD = function(nums) {
     // Find the minimum and maximum values in the array
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    
    // Return the GCD of just those two numbers
    return gcd(min, max);
};
console.log(findGCD([2,5,6,9,10])); // Output: 1
console.log(findGCD([7,5,6,8,3])); // Output: 1