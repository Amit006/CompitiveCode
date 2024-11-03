
/* 
Q. Counting Subarrays Easy :- (Solved)

Problem Description
Given an array A of N non-negative numbers and a non-negative number B,
you need to find the number of subarrays in A with a sum less than B.
We may assume that there is no overflow.


Problem Constraints
1 <= N <= 5 x 103
1 <= A[i] <= 1000
1 <= B <= 107


Input Format
First argument is an integer array A.
Second argument is an integer B.


Output Format
Return an integer denoting the number of subarrays in A having sum less than B.


Example Input
Input 1:
 A = [2, 5, 6]
 B = 10
Input 2:
 A = [1, 11, 2, 3, 15]
 B = 10


Example Output
Output 1:
 4
Output 2:
 4


Example Explanation
Explanation 1:
 The subarrays with sum less than B are {2}, {5}, {6} and {2, 5},
Explanation 2:
 The subarrays with sum less than B are {1}, {2}, {3} and {2, 3}

*/



const A = [2, 5, 6];
const B = 10;

const A2 = [1, 11, 2, 3, 15];
const B2 = 10;

// find all possible sub array with sum less then B
const  findSubArrayLessThenB = (A, B) => {
    let allSubarray = [];
    for (let i = 0; i < A.length; i++) {
      let subArrySum = Number(0);
      let subArry = [];
      for (let j = i; j < A.length; j++) {
        subArrySum += Number(A[j]);
        if (subArrySum < B) {
          subArry.push(A[j]);
          allSubarray.push([...subArry]);
        }
      }
    }
    console.log(allSubarray);
}

// findSubArrayLessThenB(A, B);
// findSubArrayLessThenB(A2, B2);

/*
 output
 [ [ 2 ], [ 2, 5 ], [ 5 ], [ 6 ] ]
 [ [ 1 ], [ 2 ], [ 2, 3 ], [ 3 ] ]
 */

 const countSubArrayLessThenB = (A, B) => {
    let countNumberOfSumArray = Number(0);
    for (let i = 0; i < A.length; i++) {
      let subArrySum = Number(0);
      for (let j = i; j < A.length; j++) {
        subArrySum += Number(A[j]);
        if (subArrySum < B) {
          countNumberOfSumArray += Number(1);
        }
      }
    }
    return countNumberOfSumArray;
}

// console.log(countSubArrayLessThenB(A, B));
// console.log(countSubArrayLessThenB(A2, B2))


// An effcient approch O(n)
// Slinging window approch 

const countSubarraysLessThanB = (arr, B) => {
    let count = 0;
    let start = 0;
    let sum = 0;

    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];

        while (sum >= B && start <= end) {
            sum -= arr[start];
            start++;
        }
        
        
        count += (end - start + 1);
        console.log('start: ', start, ' end: ', end, ' sum: ', sum, ' count: ', count);
    }

    return count;
}


// output
// start:  0  end:  0  sum:  0  count:  1
// start:  0  end:  1  sum:  2  count:  3
// start:  2  end:  2  sum:  6  count:  4
// 4 
// start:  0  end:  0  sum:  1  count:  1
// start:  2  end:  1  sum:  0  count:  1
// start:  2  end:  2  sum:  2  count:  2
// start:  2  end:  3  sum:  5  count:  4
// start:  5  end:  4  sum:  0  count:  4
// 4

console.log(countSubarraysLessThanB(A, B)); // Output: 5
console.log(countSubarraysLessThanB(A2, B2)); // Output: 5