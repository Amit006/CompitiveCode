function rangeSum (A, B){
    let maxRage = B[0][1];
    let lowRange = B[0][0];
    let prefixSum = [A[0]];
    for(let i=1; i <= maxRage; i++) prefixSum.push(prefixSum[i-1]+A[i]);
    let returnArray = [Number(prefixSum[maxRage]) - Number(lowRange ? prefixSum[lowRange-1]: lowRange)];
    for(let i=1; i <= B.length; i++){
      let upperLimit = B[i][1];
      let lowerLimit = B[i][0];
      if(upperLimit >  maxRage){
        for(let l = maxRage+1; l <= upperLimit; l++){
            let sum = prefixSum[l-1]+A[l]
            prefixSum.push(sum);
        }
        returnArray.push(Number(prefixSum[upperLimit]) - Number( lowerLimit ? prefixSum[lowerLimit-1]: lowerLimit));
        maxRage = upperLimit;
      } else returnArray.push(Number(prefixSum[upperLimit])-Number(lowerLimit? prefixSum[lowerLimit-1] : lowerLimit));
    }

    return returnArray; 
}


    // B.slice(1,B.length).forEach(element => {
    //     let upperLimit = element[1];
    //     let lowerLimit = element[0];
    //     if(upperLimit >  maxRage){
    //     for(let l = maxRage+1; l <= upperLimit; l++){
    //         let sum = prefixSum[l-1]+A[l]
    //         prefixSum.push(sum);
    //     }
    //     returnArray.push(Number(prefixSum[upperLimit]) - Number( lowerLimit ? prefixSum[lowerLimit-1]: lowerLimit));
    //     maxRage = upperLimit;
    //   } else returnArray.push(Number(prefixSum[upperLimit])-Number(lowerLimit? prefixSum[lowerLimit-1] : lowerLimit));       
    //  });


// A = [1, 2, 3, 4, 5]
// B = [[0, 3], [1, 2]]

// Output 1:
// [10, 5]
// Output 2:
// [2, 4]

// let A = [ 7, 3, 1, 5, 5, 5, 1, 2, 4, 5 ]
// let B = [[6, 9],[2, 9],[2, 4],[0, 9]
// ]

// let A = [ 4, 5, 6, 9, 4, 1, 8, 3 ]
// let B = [
//   [1, 3],
//   [6, 7],
//   [0, 3],
//   [0, 5],
//   [7, 7],
//   [1, 1],
//   [3, 7],
//   [1, 3],
//   [6, 7],
//   [5, 6]
// ]

// let A = [ 10, 6 ]
// let B = 
// [
//   [0, 0],
//   [0, 1],
//   [0, 0],
//   [0, 0],
//   [0, 0],
//   [0, 1],
//   [0, 0],
//   [1, 1],
//   [1, 1]
// ]

// let A = [ 7, 6, 1, 3, 1 ]
// let B = 
// [
//   [2, 3],
//   [2, 3],
//   [0, 2],
//   [1, 4]
// ]


let A = [ 43700, 91326, 7993, 98711 ]
let B = 
[
  [0, 2],
  [0, 3],
  [1, 2],
  [0, 1],
  [2, 2],
  [2, 3],
  [1, 3],
  [0, 3],
  [0, 2],
  [1, 3],
  [0, 1],
  [0, 1],
  [0, 3],
  [1, 1],
  [1, 3],
  [0, 2],
  [2, 3],
  [0, 1],
  [1, 2],
  [1, 2],
  [0, 3],
  [0, 3],
  [2, 3],
  [1, 3],
  [1, 3],
  [0, 0],
  [0, 1],
  [2, 3],
  [2, 3],
  [1, 3],
  [0, 0],
  [2, 3],
  [1, 2],
  [0, 2],
  [0, 3],
  [0, 3],
  [0, 3],
  [0, 1],
  [0, 1],
  [0, 0],
  [0, 1],
  [0, 1],
  [1, 3],
  [3, 3],
  [0, 3],
  [0, 0],
  [1, 2],
  [0, 2],
  [3, 3],
  [0, 1],
  [3, 3],
  [2, 3],
  [2, 3],
  [0, 2],
  [1, 1],
  [2, 2],
  [0, 3],
  [0, 2],
  [1, 1],
  [2, 2],
  [0, 3],
  [3, 3],
  [0, 1],
  [1, 2],
  [1, 2],
  [1, 3],
  [0, 1],
  [0, 1],
  [3, 3],
  [0, 1],
  [1, 3],
  [0, 0],
  [1, 1],
  [1, 3],
  [0, 3],
  [0, 1],
  [3, 3],
  [0, 3],
  [0, 2],
  [2, 3],
  [0, 3],
  [2, 3],
  [0, 3],
  [2, 3],
  [0, 1],
  [1, 1],
  [2, 2],
  [0, 1],
]

console.log(rangeSum(A,B));