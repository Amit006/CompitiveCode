/*
Q4. 2 Sum
Solved
feature icon
Using hints except Complete Solution is Penalty free now
Use Hint
Problem Description

Given an array of integers, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 < index2. Please note that your returned answers (both index1 and index2 ) are not zero-based. Put both these numbers in order in an array and return the array from your function ( Looking at the function signature will make things clearer ). Note that, if no pair exists, return empty list.

If multiple solutions exist, output the one where index2 is minimum. If there are multiple solutions with the minimum index2, choose the one with minimum index1 out of them.

Input: [2, 7, 11, 15], target=9
Output: index1 = 1, index2 = 2


Expected Output
Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases
Arg 1: An Integer Array, For e.g [1,2,3]
Enter Input Here
Arg 2: A single Integer, For e.g 9
Enter Input Here

*/

const twoSum = (A, B) => {
  const hashMap = new Map();
  const bestPair = [Infinity, Infinity];

  for (let i = 0; i < A.length; i++) {
    let substarctVal = B - A[i];

    if (hashMap.has(substarctVal)) {
      let index = hashMap.get(substarctVal) ;
      let index2 = i + 1;
      if (index2 < bestPair[1]) {
        bestPair[1] = index2;
        bestPair[0] = index;
      }
      if (index2 === bestPair[1] && (index+1) < bestPair[0]) bestPair[0] = index;
    } else {
      hashMap.set(A[i], Math.min(hashMap.get(A[i]) || Infinity, i + 1));
    }
  }

  return bestPair;
};

const Input = [2, 7, 11, 15],
  target = 9;
const Input2 = [
    4, 7, -4, 2, 2, 2, 3, -5, -3, 9, -4, 9, -7, 7, -1, 9, 9, 4, 1, -4, -2, 3,
    -3, -5, 4, -7, 7, 9, -4, 4, -8,
  ],
  target2 = -3;
// console.log(twoSum(Input, target));
console.log(twoSum(Input2, target2));
// Output: [1, 2]



const twoSum2 = (A, B) => {
    const map = new Map();
    let res = [-1, -1];
    let len = A.length; // Cache the length for efficiency

    for (let i = 0; i < len; i++) {
      let c = B - A[i];

      if (map.has(c)) {
        let j = map.get(c);

        if (res[0] === -1 || i < res[1] - 1 || (i === res[1] - 1 && j < res[0] - 1)) {
          res[0] = j + 1;
          res[1] = i + 1;
        }
      }

      if (!map.has(A[i])) {
        map.set(A[i], i);
      }
    }

    if (res[0] === -1) { // More efficient check than comparing both elements
      return [];
    } else {
      return res;
    }
  }