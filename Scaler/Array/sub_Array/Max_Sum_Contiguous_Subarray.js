const A = [1, 2, 3, 4, -10];
const B = [-2, 1, -3, 4, -1, 2, 1, -5, 4];


function maxSumContiguousSubarray(arr){
    let maxSum = 0;
    let maxSumArr = [];
    for(let i =0; i< arr.length; i++){
        let sum  = (i+1) * (arr.length-i) * arr[i];
         maxSumArr.push(sum);   
    }
    // console.log(' maxSumContiguousSubarray: - ', maxSumArr);
}

maxSumContiguousSubarray(A);
maxSumContiguousSubarray(B);