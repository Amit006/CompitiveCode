const Input1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 2, 3, 4],
];
const Input2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
const Input3 = [
    [1],
    [2],
    [3],
    [4],
];

function matrixSum(A) {
    if (A.length === 0 || A[0].length === 0) {
        return [];
    }
    let n = A.length;
    let m = A[0].length;
    let resultMatrix = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (A[i].length !== m) {
            throw new Error("Inconsistent row lengths in the matrix");
        }
        for (let j = 0; j < m; j++) {
            resultMatrix[i] += A[i][j];
        }
    }
    return resultMatrix;
}

console.log(matrixSum(Input1)); // [10, 26, 18]
console.log(matrixSum(Input2)); // [6, 15, 18]
console.log(matrixSum(Input3)); // [1, 2, 3, 4]