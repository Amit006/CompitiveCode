// function reverseString(string) {
//     let reversedString = "";
//     for (char of string) {
//         reversedString = char + reversedString;
//     }
//     return reversedString;
// }


// console.log(reverseString('Amit Nayek'));


const arr = [1,2,6,7,9,3,5,7,9,2,6,7,4,5,9];
let tempSum = 0;
const prefixSum = arr.map((d)=> tempSum+=d);
console.log(prefixSum);

// find the prefix sum of location 4
console.log(prefixSum[4-1]+prefixSum[4]); 



// n = 6 
// i = 4 

// (6-1) - 4
// 2 +1 
// 3
// 6-4
// 2
