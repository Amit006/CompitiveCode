/*

Q2. Diffk II
Solved
feature icon
Using hints except Complete Solution is Penalty free now
Use Hint
Problem Description

Given an array A of integers and another non negative integer B .

Find if there exists 2 indices i and j such that A[i] - A[j] = B and i != j.



Problem Constraints

1 <= |A| <= 106

0 <= A[i] <= 109

0 <= B <= 109



Input Format

First argument A is an array of integer

Second argument B is an integer



Output Format

Return 1 if two such indexes are found and 0 otherwise


Example Input

Input 1:
A = [1, 5, 3]
B = 2
Input 2:
A = [2, 4, 3]
B = 3


Example Output

Output 1:
1
Output 2:
0


Example Explanation

For Input 1:
The given value of A[1] = 1 and A[3] = 3.
The value of A[3] - A[1] = 2.
For Input 2:
There are no pairs such that difference is B.

*/

/**
 * @param {number[]} A
 * @param {number} B
 * @return {number}
 */

const diffPossible = (A, B) => {
  const n = A.length;
  if (n < 2) {
    return 0;
  }

  A.sort((a, b) => a - b); // Sort the array

  let left = 0;
  let right = 1;

  while (right < n) {
    const diff = A[right] - A[left];

    if (diff === B && left !== right) {
      return 1;
    } else if (diff < B) {
      right++;
    } else {
      left++;
      if (left === right) {
        right++;
      }
    }
  }

  return 0;
};

const AA = [1, 5, 3];
const BB = 2;
console.log(diffPossible(AA, BB));
console.log(diffPossible([2, 4, 3], 3));

// woeking on hasMap approch

// complaxity
// Time complexity: O(n) - but slower than the two pointer approach
const diffPossibleInHashSet = (A, B) => {
  const hashMap = new Map();
  A.forEach((data, index) => {
    hashMap.set(data, [...(hashMap.get(data) || []), index]);
  });
  for (let i = 0; i < A.length; i++) {
    let sum = A[i] + B;
    let postionArray = hashMap.get(sum);
    if (Array.isArray(postionArray) && i == postionArray[0]) {
      let IndexArray = hashMap.get(sum);
      IndexArray.shift();
      hashMap.set(sum, IndexArray);
    }
    if (hashMap.has(sum) && hashMap.get(sum).length && i != hashMap.get(sum)[0])
      return 1;
  }
  return 0;
};

// Input 1:
const A = [1, 5, 3];
const B = 2;
// Input 2:
const A1 = [2, 4, 3];
const B1 = 3;

const A3 = [
  77, 28, 19, 21, 67, 15, 53, 25, 82, 52, 8, 94, 50, 30, 37, 39, 9, 43, 35, 48,
  82, 53, 16, 20, 13, 95, 18, 67, 77, 12, 93, 0,
];
const B3 = 53;

const A4 = [
  34, 63, 64, 38, 65, 83, 50, 44, 18, 34, 71, 80, 22, 28, 20, 96, 33, 70, 0, 25,
  64, 96, 18, 2, 53, 100, 24, 47, 98, 69, 60, 55, 8, 38, 72, 94, 18, 68, 0, 53,
  18, 30, 86, 55, 13, 93, 15, 43, 73, 68, 29,
];
const B4 = 97;

const A5 = [
  11, 85, 100, 44, 3, 32, 96, 72, 93, 76, 67, 93, 63, 5, 10, 45, 99, 35, 13,
];
const B5 = 60;

const A6 = [1, 5, 4, 1, 2];
const B6 = 0;

// console.log(diffPossibleInHashSet(A, B)); // 1
// console.log(diffPossibleInHashSet(A1, B1)); // 0

// console.log(diffPossibleInHashSet(A3, B3)); // 1

// console.log(diffPossibleInHashSet(A4, B4)); // 1
// console.log(diffPossibleInHashSet([1, 5, 3], 2)); // 1
// console.log(diffPossibleInHashSet(A5, B5)); // 1
console.log(diffPossibleInHashSet([0], 0)); // 1

// complexity
// Time complexity: O(n)
const diffPossibleInHashSetV2 = (A, B) => {
  // Edge cases
  if (A.length < 2) return 0;
  
  // Special case for B = 0: just check for duplicates
  if (B === 0) {
    const seen = new Set();
    for (const num of A) {
      if (seen.has(num)) return 1;
      seen.add(num);
    }
    return 0;
  }
  
  // For B > 0: use a Set for O(1) lookups
  const seen = new Set();
  
  for (const num of A) {
    // Check if either num+B or num-B exists in our set
    if (seen.has(num + B) || seen.has(num - B)) {
      return 1;
    }
    seen.add(num);
  }
  
  return 0;
};