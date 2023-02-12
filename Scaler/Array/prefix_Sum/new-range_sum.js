function rangeSum (A, B){
    return B.map(d=>getArrSum(A.slice(d[0], d[1]))); 
}


const  getArrSum = (arr)=>arr.reduce((a,b)=>a+b,0);
// A = [1, 2, 3, 4, 5]
// B = [[0, 3], [1, 2]]

// Output 1:
// [10, 5]
// Output 2:
// [2, 4]

let A = [ 7, 3, 1, 5, 5, 5, 1, 2, 4, 5 ]
let B = [[6, 9],[2, 9],[2, 4],[0, 9]
]

console.log(rangeSum(A,B));