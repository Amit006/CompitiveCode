const Input1 = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9] ];
const Input2 = [
[1, 2],
[3, 4],
];

// const antiDiagonalMatrix = (A) => {
//     let antiDiagoanalMatrix = [];
//        for (let i=0; i < A.length; i++){
//            let tempArr = new Array(A[i].length).fill(0);

//            for(let j=0;j<=i;j++){
//                tempArr[j] = A[j][i-j];
//            }
//            antiDiagoanalMatrix.push(tempArr);
//          }
//     //    console.log(" antiDiagonalMatrix: ", antiDiagoanalMatrix);
//        for(let k=1;k<A.length;k++){
//         let subArrLength = A[k].length;
//         let tempArr = new Array(subArrLength).fill(0);
//         for(let j=subArrLength-1;j>=k;j--){
//             tempArr[subArrLength-(j+1)] = A[k + ((subArrLength-1)-j)][j];
//         }
//         antiDiagoanalMatrix.push(tempArr);
//     }
//         // console.log(" antiDiagonalMatrix: ", antiDiagoanalMatrix);
//        return antiDiagoanalMatrix;
// }
// console.log(antiDiagonalMatrix(Input1));

// function antiDiagonals(A) {
//     const N = A.length;
//     const totalS = 2 * N - 1;
//     const result = new Array(totalS).fill().map(() => []);
    
//     for (let i = 0; i < N; i++) {
//         for (let j = 0; j < N; j++) {
//             const s = i + j;
//             result[s].push(A[i][j]);
//             // console.log("i. and j", i, j, A[i][j],result);
//         }
//     }
    
//     for (let s = 0; s < totalS; s++) {
//         while (result[s].length < N) {
//             result[s].push(0);
//         }
//     }
    
//     return result;
// }
function antiDiagonals(A) {
    const N = A.length;
    const totalS = 2 * N - 1;
    const result = new Array(totalS).fill().map(() => new Array(N).fill(0));
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            const s = i + j;
            const start_i = Math.max(0, s - (N - 1));
            const pos = i - start_i;
            result[s][pos] = A[i][j];
        }
    }
    
    return result;
}



// console.log(antiDiagonals(Input2));

const antiDiagonalMatrix = (A) => {
    const n = A.length; // Size of the matrix
    const result = Array.from({ length: 2 * n - 1 }, () => new Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // Determine the anti-diagonal index
            const antiDiagonalIndex = i + j;

            // Sequentially fill the position within the anti-diagonal row
            const positionInAntiDiagonal = j; // Index in the anti-diagonal is based on 'j'
            result[antiDiagonalIndex][positionInAntiDiagonal] = A[i][j];
        }
    }

    return result;
};


console.log(antiDiagonalMatrix(Input2));
