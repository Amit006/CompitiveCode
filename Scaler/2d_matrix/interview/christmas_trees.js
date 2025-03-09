const A = [1, 3, 5];
const B = [1, 2, 3];
const A1 = [1, 6, 4, 2, 6, 9];
const B1 = [2, 5, 7, 3, 2, 7];

const A2 = [5, 9, 10, 4, 7, 8];
const B2 = [5, 6, 4, 7, 2, 5];

const A3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const B3 = [10, 13, 11, 14, 15, 12, 13, 13, 18, 13];

function christmasTrees(A, B) {
  let smallestSum = Infinity;

  for (let j = 1; j < A.length - 1; j++) {
    let leftMin = Infinity;
    let rightMin = Infinity;

    for (let i = 0; i < j; i++) {
      if (A[i] < A[j]) {
        leftMin = Math.min(leftMin, B[i]);
      }
    }

    for (let k = j + 1; k < A.length; k++) {
      if (A[k] > A[j]) {
        rightMin = Math.min(rightMin, B[k]);
      }
    }

    if (leftMin !== Infinity && rightMin !== Infinity) {
      smallestSum = Math.min(smallestSum, B[j] + leftMin + rightMin);
    }
  }

  return smallestSum === Infinity ? -1 : smallestSum;
}

// Test cases
console.log(christmasTrees(A, B)); // 6
console.log(christmasTrees(A1, B1)); // 14
console.log(christmasTrees(A2, B2)); // 14
console.log(christmasTrees(A3, B3)); // 36


/*

Q2. Christmas Trees : - 
Problem Description

You are given an array A consisting of heights of Christmas trees and an array B of the same size consisting of the cost of each of the trees (Bi is the cost of tree Ai, where 1 ≤ i ≤ size(A)), and you are supposed to choose 3 trees (let's say, indices p, q, and r), such that Ap < Aq < Ar, where p < q < r.
The cost of these trees is Bp + Bq + Br.






You are to choose 3 trees such that their total cost is minimum. Return that cost.

If it is not possible to choose 3 such trees return -1.








Problem Constraints

1 <= A[i], B[i] <= 109
3 <= size(A) = size(B) <= 3000



Input Format

First argument is an integer array A.
Second argument is an integer array B.



Output Format

Return an integer denoting the minimum cost of choosing 3 trees whose heights are strictly in increasing order, if not possible, -1.



Example Input

Input 1:




 A = [1, 3, 5]
 B = [1, 2, 3]
Input 2:

 A = [1, 6, 4, 2, 6, 9]
 B = [2, 5, 7, 3, 2, 7]





Example Output

Output 1:




 6 
Output 2:

 7 





Example Explanation

Explanation 1:




 We can choose the trees with indices 1, 2 and 3, and the cost is 1 + 2 + 3 = 6. 



Explanation 2:




 We can choose the trees with indices 1, 4 and 5, and the cost is 2 + 3 + 2 = 7. 
 This is the minimum cost that we can get.

*/