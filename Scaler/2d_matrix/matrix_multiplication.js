const matrixMultiplation = (matrix1, matrix2) => {
  let result = new Array(matrix1.length)
    .fill()
    .map((d) => new Array(matrix2[0].length).fill(0));

  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix2.length; j++) {
      for (let k = 0; k < matrix2[0].length; k++) {
        result[i][k] += matrix1[i][j] * matrix2[j][k];
      }
    }
  }
  return result;
};

const A = [
  [1, 2],
  [3, 4],
];
const B = [
  [5, 6],
  [7, 8],
];

console.log(matrixMultiplation(A, B)); // [[7,10],[15,22]]


/*

Problem Description
You are given two integer matrices A(having M X N size) and B(having N X P). You have to multiply matrix A with B and return the resultant matrix. (i.e. return the matrix AB).
*/