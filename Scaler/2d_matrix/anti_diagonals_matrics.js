const Input1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9] ];
  const Input2 = [
  [1, 2],
  [3, 4],
  ];
  
  // my Solution - O(n*4)
  const antiDiagonalMatrix = (A) => {
      let antiDiagoanalMatrix = [];
         for (let i=0; i < A.length; i++){
             let tempArr = new Array(A[i].length).fill(0);
  
             for(let j=0;j<=i;j++){
                 tempArr[j] = A[j][i-j];
             }
             antiDiagoanalMatrix.push(tempArr);
           }
      //    console.log(" antiDiagonalMatrix: ", antiDiagoanalMatrix);
         for(let k=1;k<A.length;k++){
          let subArrLength = A[k].length;
          let tempArr = new Array(subArrLength).fill(0);
          for(let j=subArrLength-1;j>=k;j--){
              tempArr[subArrLength-(j+1)] = A[k + ((subArrLength-1)-j)][j];
          }
          antiDiagoanalMatrix.push(tempArr);
      }
          // console.log(" antiDiagonalMatrix: ", antiDiagoanalMatrix);
         return antiDiagoanalMatrix;
  }
  console.log('Old Solution: ',antiDiagonalMatrix(Input1));
  console.log('Old Solution: ',antiDiagonalMatrix(Input2));
  
// optimise solution - O(n*2)
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
  
  
  
  console.log('New Solution: ',antiDiagonals(Input1));
  console.log('New Solution:',antiDiagonals(Input2));
  