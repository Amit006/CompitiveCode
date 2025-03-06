const matrixTranspose = (matrix1) => {
  let result = new Array(matrix1[0].length)
    .fill()
    .map((d) => new Array(matrix1.length).fill(0));

  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[0].length; j++) {
      console.log(i, j, matrix1[i][j]);
      result[j][i] = matrix1[i][j];
    }
  }
  return result;
};

const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const B = [
  [1, 2],
  [1, 2],
  [1, 2],
];
const C = [
  [21, 62, 16, 44, 55, 100, 16, 86, 29],
  [62, 72, 85, 35, 14, 1, 89, 15, 73],
  [42, 44, 30, 56, 25, 52, 61, 23, 54],
  [5, 35, 12, 35, 55, 74, 50, 50, 80],
  [2, 65, 65, 82, 26, 36, 66, 60, 1],
  [18, 1, 16, 91, 42, 11, 72, 97, 35],
  [23, 57, 9, 28, 13, 44, 40, 47, 98],
];

console.log(matrixTranspose(C));

/*
  
 Q6. Matrix Transpose
Solved
feature icon
Using hints except Complete Solution is Penalty free now
Use Hint
Problem Description

Given a 2D integer array A, return the transpose of A.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.


Problem Constraints

1 <= A.size() <= 1000






1 <= A[i].size() <= 1000

1 <= A[i][j] <= 1000






Input Format

First argument is a 2D matrix of integers.





Output Format

You have to return the Transpose of this 2D matrix.



Example Input

Input 1:




A = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
Input 2:

A = [[1, 2],[1, 2],[1, 2]]





Example Output

Output 1:






[[1, 4, 7], [2, 5, 8], [3, 6, 9]]
Output 2:









[[1, 1, 1], [2, 2, 2]]





Example Explanation

Explanation 1:

Clearly after converting rows to column and columns to rows of [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
 we will get [[1, 4, 7], [2, 5, 8], [3, 6, 9]].
Explanation 2:

After transposing the matrix, A becomes [[1, 1, 1], [2, 2, 2]]
  
  */
