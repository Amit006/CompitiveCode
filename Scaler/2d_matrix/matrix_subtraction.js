const matrixSubtraction = (matrix1, matrix2) => {
  let result = new Array(matrix1.length)
    .fill()
    .map((d) => new Array(matrix2[0].length).fill(0));

  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix2[0].length; j++) {
      result[i][j] = (matrix1[i][j] - matrix2[i][j]);
    }
  }
  return result;
};

const A =  [[1, 2, 3], 
      [4, 5, 6], 
      [7, 8, 9]];

const B =  [[9, 8, 7], 
      [6, 5, 4], 
      [3, 2, 1]];

      const A1= [[-5,7],[3,1],[4,-10]];
      const B1= [[3,4],[2,3],[10,1]]

console.log(matrixSubtraction(A1, B1)); // [[7,10],[15,22]]


/*

Problem Description

You are given two integer matrices A and B having same size(Both having same number of rows (N) and columns (M). You have to subtract matrix B from A and return the resultant matrix. (i.e. return the matrix A - B).
If A and B are two matrices of the same order (same dimensions). Then A - B is a matrix of the same order as A and B and its elements are obtained by doing an element wise subtraction of A from B.

*/