const A = 5;
const B = 12;
const C = [2, 1, 3, 4, 5];

const A1 = 3;
const B1 = 1;
const C1 = [2, 2, 2];

const A2 = 1;
const B2 = 75;
const C2 = [4];


const A3 = 5;
const B3 = 7;
const C3 = [3,8,8,9,7];

// problem link :- https://www.scaler.com/academy/mentee-dashboard/class/31579/assignment/problems/1056/submissions
const findMaxSubArray = (A, B, C) => {
  let secondMaxSum = Number(0);
  for (let i = 0; i < A; i++) {
    let subArrySum =Number(0);

    for (let j = i; j < A; j++) {
      subArrySum += Number(C[j]);
      if (subArrySum === B) {
        return B;
      } else if (subArrySum < B && subArrySum > secondMaxSum ) {
        secondMaxSum = subArrySum;
      }
    }
  }

  return secondMaxSum;
};

// console.log(findMaxSubArray(A, B, C));
// console.log(findMaxSubArray(A1, B1, C1));
// console.log(findMaxSubArray(A2, B2, C2));
console.log(findMaxSubArray(A3, B3, C3));


