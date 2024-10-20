const InputA = [3, 7, 90, 20, 10, 50, 40];
const InputB = 3;

const InputA1 = [3, 7, 5, 20, -10, 0, 12];
const InputB1 = 2;


const inputA2 = [20,3,13,5,10,14,8,5,11,9,1,11];
const inputB2 = 9;


// Interate through all array approch O(n^2)
const itreateThroughAllArray = (A, B) => {
    let leastSubArraySum = 0;
    let subArrayFastIndex = 0;
    for(let i = 0; i <= A.length - B ; i++){
        let sumArraySum = 0;
        for(let j =i; j< B+i; j++){
            // console.log(' value of j : ', j , ' Value. of A[j]: ', A[j]);
            sumArraySum += A[j]
        }
        // console.log(' leastSubArraySum: ', leastSubArraySum, ' check condition: ', !leastSubArraySum, ' sum: ', sumArraySum);
        if(!leastSubArraySum ||  leastSubArraySum > sumArraySum ) {
            leastSubArraySum = sumArraySum; 
            subArrayFastIndex = i;
        }
    }
    return { leastSubArraySum, subArrayFastIndex};
}

// console.log(itreateThroughAllArray(InputA, InputB));
// console.log(itreateThroughAllArray(InputA1, InputB1));

// console.log(itreateThroughAllArray(inputA2, inputB2));


// Optimise solution with O(n) using frist sub sum and sliceding window approch
const subArrayWithLeastAvgSum = (A, B) => {
    let firstSubArrySum = 0;
    let leastSubArraySum = Infinity;
    let subArrayFastIndex = 0;
    // frist sub sum
    for(let i = 0; i < B ; i++){
        // console.log('1st sum  A[i]: ', A[i]);
        firstSubArrySum += A[i]
    }
    leastSubArraySum = firstSubArrySum;

    // using sliciding window approch iteraed rest of the array.
    for(let i = B ; i < A.length; i++){
        // console.log(' A[i] : ', A[i], ' A[i - B] : ', A[i-B]);
        firstSubArrySum += A[i] - A[i-B];
        // console.log('firstSubArrySum: ', firstSubArrySum, ' leastSubArraySum: ', leastSubArraySum)
        if (leastSubArraySum > firstSubArrySum) {
            leastSubArraySum = firstSubArrySum;
            subArrayFastIndex = i - B + 1;
        }
    }

    return { leastSubArraySum, subArrayFastIndex};
}


// console.log(subArrayWithLeastAvgSum(InputA, InputB));
// console.log(subArrayWithLeastAvgSum(InputA1, InputB1));
console.log(subArrayWithLeastAvgSum(inputA2, inputB2));