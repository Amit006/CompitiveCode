/*
Q2. SUBARRAY OR
Solved
feature icon
Using hints except Complete Solution is Penalty free now
Use Hint
Problem Description

You are given an array of integers A of size N.

The value of a subarray is defined as BITWISE OR of all elements in it.

Return the sum of value of all subarrays of A % 109 + 7.



Problem Constraints

1 <= N <= 105

1 <= A[i] <= 108



Input Format

The first argument given is the integer array A.



Output Format

Return the sum of Value of all subarrays of A % 109 + 7.



Example Input

Input 1:

 A = [1, 2, 3, 4, 5]
Input 2:

 A = [7, 8, 9, 10]


Example Output

Output 1:

 71
Output 2:

 110


Example Explanation

Explanation 1:

 Value([1]) = 1
 Value([1, 2]) = 3
 Value([1, 2, 3]) = 3
 Value([1, 2, 3, 4]) = 7
 Value([1, 2, 3, 4, 5]) = 7
 Value([2]) = 2
 Value([2, 3]) = 3
 Value([2, 3, 4]) = 7
 Value([2, 3, 4, 5]) = 7
 Value([3]) = 3
 Value([3, 4]) = 7
 Value([3, 4, 5]) = 7
 Value([4]) = 4
 Value([4, 5]) = 5
 Value([5]) = 5
 Sum of all these values = 71
Explanation 2:

 Sum of value of all subarray is 110.

*/



const SubArrayOr = () => {
  const MOD = 1e9 + 7;
  let res = 0;
  let orCounts = new Map(); // OR value -> count of subarray's ending here

  for (let num of A) {
    let newMap = new Map();
    // single element subarray
    newMap.set(num, (newMap.get(num) || 0) + 1);

    for (let [val, count] of orCounts) {
      let newVal = val | num;
      newMap.set(newVal, (newMap.get(newVal) || 0) + count);
    }

    for (let [val, count] of newMap) {
      res = (res + val * count) % MOD;
    }

    orCounts = newMap;
  }

  return res;
};

const input = [1, 2, 3, 4, 5];
// console.log(SubArrayOr(A));

// Optimized solution
const SubArrayOrOptimized = (A) => {
  const MOD = 1000000007n;
  const n = A.length;
  let totalSum = 0n;

  for (let bit = 0; bit < 32; bit++) {
    let lastSet = -1;
    let count = 0;

    for (let i = 0; i < n; i++) {
      if (A[i] & (1 << bit)) {
        lastSet = i;
      }
      if (lastSet !== -1) {
        count += lastSet + 1;
      }
    }

    let bitValue = 1n << BigInt(bit);
    totalSum = (totalSum + BigInt(count) * bitValue) % MOD;
  }

  return Number(totalSum);
};

console.log(SubArrayOrOptimized(input));
console.log(SubArrayOrOptimized([1, 2, 3]));
