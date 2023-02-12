// time limit exit
function solve(A, B){
    let PS = A.slice(0,B).reduce((a,b)=>a+b,0);
    let maxSum = PS;
    let firstPairSum = PS;
    let secondPairSum = 0;
    for(let i=1; i<=B; i++ ){
        firstPairSum = firstPairSum - A[B-i]
        secondPairSum = secondPairSum + A[A.length-i]
        let sum = firstPairSum + secondPairSum;
        if(maxSum < sum ) maxSum = sum;
    }
    return maxSum;
}

const  getArrSum = (arr)=>arr.reduce((a,b)=>a+b,0);


A = [5, -2, 3 , 1, 2]
B = 3

console.log(solve(A, B));