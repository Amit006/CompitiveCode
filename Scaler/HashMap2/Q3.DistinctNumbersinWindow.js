/*
Q3. Distinct Numbers in Window
Solved
feature icon
Using hints except Complete Solution is Penalty free now
Use Hint
Problem Description

You are given an array of N integers, A1, A2 ,..., AN and an integer B. Return the of count of distinct numbers in all windows of size B.

Formally, return an array of size N-B+1 where i'th element in this array contains number of distinct elements in sequence Ai, Ai+1 ,..., Ai+B-1.

NOTE: if B > N, return an empty array.



Problem Constraints

1 <= N <= 106

1 <= A[i] <= 109


Input Format

First argument is an integer array A
Second argument is an integer B.



Output Format

Return an integer array.



Example Input

Input 1:

 A = [1, 2, 1, 3, 4, 3]
 B = 3
Input 2:

 A = [1, 1, 2, 2]
 B = 1


Example Output

Output 1:

 [2, 3, 3, 2]
Output 2:

 [1, 1, 1, 1]


Example Explanation

Explanation 1:

 A=[1, 2, 1, 3, 4, 3] and B = 3
 All windows of size B are
 [1, 2, 1]
 [2, 1, 3]
 [1, 3, 4]
 [3, 4, 3]
 So, we return an array [2, 3, 3, 2].
Explanation 2:

 Window size is 1, so the output array is [1, 1, 1, 1].




*/

const distinctNumbersInWindow = (A, B) => {
  const n = A.length;
  const result = [];
  const map = new Map();

  for (let i = 0; i < B; i++) {
    map.set(A[i], (map.get(A[i]) || 0) + 1);
  }
  console.log("Map.size", map.size);
  // Push the size of the map (number of distinct elements) to the result array
  result.push(map.size);

  for (let i = B; i < n; i++) {
    map.set(A[i], (map.get(A[i]) || 0) + 1);
    if (map.get(A[i - B]) === 1) {
      map.delete(A[i - B]);
    } else {
      map.set(A[i - B], map.get(A[i - B]) - 1);
    }
    result.push(map.size);
  }

  return result;
};

let A = [1, 2, 1, 3, 4, 3],
  B = 3;

// console.log(distinctNumbersInWindow(A, B)); // [3, 4, 4]
// Output: [3, 4, 4]

const distinctNumbersInWindow2 = (A, B) => {
  const n = A.length;
  const result = [];

  for (let i = 0; i <= n - B; i++) {
    const window = A.slice(i, i + B);
    const distinctCount = new Set(window).size;
    result.push(distinctCount);
  }

  return result;
};

console.log(distinctNumbersInWindow2(A, B)); // [3, 4, 4]
// Output: [3, 4, 4]

// O(n^2) solution
const distinctNumbersInWindow3 = (A, B) => {
  const n = A.length;
  const result = [];

  for (let i = 0; i <= n - B; i++) {
    const window = A.slice(i, i + B);
    const distinctCount = new Set(window).size;
    result.push(distinctCount);
  }

  return result;
};

// using sliding window approach
// complexity O(n)
const distinctNumbersInWindow4 = (A, B) => {
  const n = A.length;
  if (B > n || B <= 0) {
    return []; // Handle edge cases
  }

  const result = [];
  const freqMap = new Map();
  let distinctCount = 0;

  // Process the first window of size B
  for (let i = 0; i < B; i++) {
    const num = A[i];
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
    if (freqMap.get(num) === 1) {
      distinctCount++;
    }
  }
  result.push(distinctCount);

  // Slide the window
  for (let i = B; i < n; i++) {
    // Remove the element going out of the window
    const outgoingNum = A[i - B];
    freqMap.set(outgoingNum, freqMap.get(outgoingNum) - 1);
    if (freqMap.get(outgoingNum) === 0) {
      distinctCount--;
    }

    // Add the new element coming into the window
    const incomingNum = A[i];
    freqMap.set(incomingNum, (freqMap.get(incomingNum) || 0) + 1);
    if (freqMap.get(incomingNum) === 1) {
      distinctCount++;
    }
    result.push(distinctCount);
  }

  return result;
};
let A1 = [1, 2, 1, 3, 4, 3],
  B1 = 3;
console.log(distinctNumbersInWindow4(A1, B1)); // [3, 4, 4]
console.log(distinctNumbersInWindow4([1, 2, 1, 3, 4, 3, 3, 5, 6, 4], 3)); // [3, 4, 4, 4, 4, 5, 5]
