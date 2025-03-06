const solve = (A) => {
  let columnLength = A[0].length;
  let resultVector = new Array(columnLength).fill(0);
  console.log(resultVector);
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < columnLength; j++) {
      resultVector[j] = resultVector[j] + A[i][j];
    }
  }

  return resultVector;
};

const input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 2, 3, 4],
];
console.log(
  solve(input)
); // {15,10,13,16}
