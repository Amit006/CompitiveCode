/*
Problem Description

Given a set of distinct integers A, return all possible subsets.






NOTE:

Elements in a subset must be in non-descending order.
The solution set must not contain duplicate subsets.
Also, the subsets should be sorted in ascending ( lexicographic ) order.
The initial list is not necessarily sorted.


Problem Constraints

1 <= |A| <= 16
INTMIN <= A[i] <= INTMAX


Input Format

First and only argument of input contains a single integer array A.



Output Format

Return a vector of vectors denoting the answer.



Example Input

Input 1:

A = [1]
Input 2:

A = [1, 2, 3]


Example Output

Output 1:

[
    []
    [1]
]
Output 2:

[
 []
 [1]
 [1, 2]
 [1, 2, 3]
 [1, 3]
 [2]
 [2, 3]
 [3]
]


Example Explanation

Explanation 1:

 You can see that these are all possible subsets.
Explanation 2:

You can see that these are all possible subsets.



*/

const subsets = (A) => {
  A.sort((a, b) => a - b);
  let result = [];
  const backtrack = (start, path) => {
    result.push([...path]);
    for (let i = start; i < A.length; i++) {
      path.push(A[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  };
  backtrack(0, []);
  return result;
};

const input = [1, 2, 3];
console.log(subsets(input));

/*
-------------------------------------------------------------
 Another Approach bit manipulation
-------------------------------------------------------------
*/
const subsetsBitManipulation = (A) => {
  A.sort((a, b) => a - b);
  let result = [];
  const n = A.length;
  const totalSubsets = 1 << n; // 2^n subsets
  for (let i = 0; i < totalSubsets; i++) {
    let subset = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        subset.push(A[j]);
      }
    }
    result.push(subset);
  }

  result.sort((a, b) => {
    let i = 0;
    while (i < a.length && i < b.length) {
      if (a[i] !== b[i]) {
        return a[i] - b[i];
      }
      i++;
    }
    return a.length - b.length;
  });

  return result;
};

const input2 = [1, 2, 3];
console.log(subsetsBitManipulation(input2));
