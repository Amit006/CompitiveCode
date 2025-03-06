const spiralMatrix = (A) => {
  let result = new Array(A).fill().map(() => new Array(A).fill(0));

  if (A === 1) {
    return [[1]];
  }
  let count = 1;
  let top = 0,
    bottom = A - 1,
    left = 0,
    right = A - 1;

  while (top <= bottom && left <= right) {
    // Traverse from left to right
    for (let i = left; i <= right; i++) {
      result[top][i] = count++;
    }
    top++;

    // Traverse from top to bottom
    for (let i = top; i <= bottom; i++) {
      result[i][right] = count++;
    }
    right--;

    // Traverse from right to left
    for (let i = right; i >= left; i--) {
      result[bottom][i] = count++;
    }
    bottom--;

    // Traverse from bottom to top
    for (let i = bottom; i >= top; i--) {
      result[i][left] = count++;
    }
    left++;
  }

  return result;
};

const range = 1;
console.log(spiralMatrix(range)); // [[1]]
const range1 = 2;
console.log(spiralMatrix(range1)); // [[1, 2], [4, 3]]
const range2 = 3;
console.log(spiralMatrix(range2)); // [[1, 2, 3], [8, 9, 4], [7, 6, 5]]

/*
Problem Description

Given an integer A, generate a square matrix filled with elements from 1 to A2 in spiral order and return the generated square matrix.



Problem Constraints

1 <= A <= 1000



Input Format

First and only argument is integer A


Output Format

Return a 2-D matrix which consists of the elements added in spiral order.



Example Input

Input 1:

1
Input 2:

2
Input 3:

5


Example Output

Output 1:

[ [1] ]
Output 2:

[ [1, 2], 
  [4, 3] ]
Output 3:

[ [1,   2,  3,  4, 5], 
  [16, 17, 18, 19, 6], 
  [15, 24, 25, 20, 7], 
  [14, 23, 22, 21, 8], 
  [13, 12, 11, 10, 9] ]


Example Explanation

Explanation 1:

Only 1 is to be arranged.
Explanation 2:

1 --> 2
      |
      |
4<--- 3
*/
