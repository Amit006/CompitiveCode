const A = [5, 6, -1, 7, 8];

const A1 = [1, 2, 3, 4, 5, 6];

const findMaxPositivSubArray = (A) => {
  const n = A.length;
  let subArray = [[]];
  let count = 0;
  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    if (A[i] > 0) {
      subArray[subArray.length - 1].push(A[i]);
      count++;
    } else {
      subArray.push([]);
      maxLength = Math.max(maxLength, count);
      count = 0;
    }
  }
  maxLength = Math.max(maxLength, count);
  return subArray.find((arr) => arr.length === maxLength);
};

console.log(findMaxPositivSubArray(A));
console.log(findMaxPositivSubArray(A1));

/*

1. Maximum positivity

Problem Description

Given an array of integers A, of size N.




Return the maximum size subarray of A having only non-negative elements. If there are more than one such subarray, return the one having the smallest starting index in A.

NOTE: It is guaranteed that an answer always exists.



Problem Constraints

1 <= N <= 105




-109 <= A[i] <= 109






Input Format

The first and only argument given is the integer array A.



Output Format

Return maximum size subarray of A having only non-negative elements. If there are more than one such subarrays, return the one having earliest starting index in A.



Example Input

Input 1:




 A = [5, 6, -1, 7, 8]


Input 2:

 A = [1, 2, 3, 4, 5, 6]







Example Output

Output 1:




 [5, 6]


Output 2:

 [1, 2, 3, 4, 5, 6]







Example Explanation

Explanation 1:




 There are two subarrays of size 2 having only non-negative elements.
 1. [5, 6]  starting point  = 0
 2. [7, 8]  starting point  = 3
 As starting point of 1 is smaller, return [5, 6]


Explanation 2:

 There is only one subarray of size 6 having only non-negative elements:
 [1, 2, 3, 4, 5, 6]



*/
