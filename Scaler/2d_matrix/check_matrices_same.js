const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const B = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const A1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const B1 = [
  [1, 2, 3],
  [7, 8, 9],
  [4, 5, 6],
];


function checkMatricesSame(A, B) {
  if (A.length !== B.length) {
    return 'false';
  }
  for (let i = 0; i < A.length; i++) {
    if (A[i].length !== B[i].length) {
      return 'false';
    }
    for (let j = 0; j < A[i].length; j++) {
      if (A[i][j] !== B[i][j]) {
        return 'false';
      }
    }
  }
  return 'true';
}

console.log(checkMatricesSame(A, B)); // true
console.log(checkMatricesSame(A1, B1)); // false