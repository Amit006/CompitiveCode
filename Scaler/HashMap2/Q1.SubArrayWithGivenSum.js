/*
Q1. Subarray with given sum
Solved
feature icon
Using hints except Complete Solution is Penalty free now
Use Hint
Problem Description

Given an array of positive integers A and an integer B, find and return first continuous subarray which adds to B.






If the answer does not exist return an array with a single integer "-1".

First sub-array means the sub-array for which starting index in minimum.








Problem Constraints

1 <= length of the array <= 100000
1 <= A[i] <= 109
1 <= B <= 109



Input Format

The first argument given is the integer array A.

The second argument given is integer B.



Output Format

Return the first continuous sub-array which adds to B and if the answer does not exist return an array with a single integer "-1".



Example Input

Input 1:

 A = [1, 2, 3, 4, 5]
 B = 5
Input 2:

 A = [5, 10, 20, 100, 105]
 B = 110


Example Output

Output 1:





 [2, 3]
Output 2:

 [-1]


*/

// const subArrayWithSum = (A, B) => {
//   const hashMap = new Map();
//   let minIndex = 0;
//   let lastIndex = 0;

//   for (let i = 0; i < A.length; i++) {
//     if (!hashMap.has(A[i])) hashMap.set(A[i], i);
//   }

//   for (let num of A) {
//     const remaningVal = B - num;
//     if (
//       hashMap.has(remaningVal) &&
//       hashMap.get(remaningVal) - hashMap.get(num) == 1
//     ) {
//       minIndex = hashMap.get(num);
//       lastIndex = hashMap.get(remaningVal);

//       console.log("minIndex", minIndex);
//       console.log("lastIndex", lastIndex);
//       return A.slice(minIndex, lastIndex+1);
//     }
//   }

//   return -1;
// };

// // console.log(subArrayWithSum([1, 2, 3, 4, 5], 5)); // [2, 3]
// console.log(subArrayWithSum([5, 10, 20, 100, 105], 110)); // [-1]


const subArrayWithSum = (A, B) => {
  // Use prefix sum approach with hashmap
  const prefixSumMap = new Map();
  let currentSum = 0;
  
  // Handle the case where a single element equals B
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] === B) {
//       return [A[i]];
//     }
//   }
  
  // Store prefix sum -> index mapping
  // Initialize with 0 sum at index -1 (before array starts)
  prefixSumMap.set(0, -1);
  
  for (let i = 0; i < A.length; i++) {
    currentSum += A[i];
    console.log("currentSum", currentSum);
    // If (currentSum - B) exists in the map, we found a subarray with sum B
    if (prefixSumMap.has(currentSum - B)) {
      const startIndex = prefixSumMap.get(currentSum - B) + 1;
      return A.slice(startIndex, i + 1);
    }
    
    // Only store the first occurrence of each prefix sum (to get minimum starting index)
    if (!prefixSumMap.has(currentSum)) {
      prefixSumMap.set(currentSum, i);
    }
    console.log("prefixSumMap", prefixSumMap);
  }
  
  // If no subarray found, return [-1]
  return [-1];
};

// Test cases
console.log(subArrayWithSum([1, 2,2, 3,3, 4, 5], 6)); // [2, 3]
// console.log(subArrayWithSum([5, 10, 20, 100, 105], 110)); // [-1]

