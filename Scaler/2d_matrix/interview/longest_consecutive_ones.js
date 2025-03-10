const A = "111000";
// Output -> 3

const A1 = "111011101";
// Output -> 7
const swap = (A) => {
  const indexOfZeroOne = A.join("").indexOf("01");
  if (indexOfZeroOne !== -1 && indexOfZeroOne !== A.length - 1) {
    A[indexOfZeroOne] = "1";
    A[indexOfZeroOne + 1] = "0";
  }
};
const longestConsecutiveOnes = (A) => {
  let charatorArray = A.split("");
  while (charatorArray.join("").match("01")) {
    swap(charatorArray);
  }
  const lengthOfconsicutiveOnes = charatorArray.join("").match(/1+/g).sort();
  return lengthOfconsicutiveOnes[lengthOfconsicutiveOnes.length-1].length;
};

// console.log(longestConsecutiveOnes(A));
// console.log(longestConsecutiveOnes(A1)); // 7



function longestOnes(A) {
  const n = A.length;
  const ones = A.split('').filter(char => char === '1').length;
  let maxOnes = 0;

  for (let i = 0; i < n; i++) {
    if (A[i] === '0') {
      let leftOnes = 0;
      let rightOnes = 0;

      let tempLeft = i - 1;
      while (tempLeft >= 0 && A[tempLeft] === '1') {
        leftOnes++;
        tempLeft--;
      }

      let tempRight = i + 1;
      while (tempRight < n && A[tempRight] === '1') {
        rightOnes++;
        tempRight++;
      }

      // Calculate the maximum length of consecutive ones by swapping this '0'
      maxOnes = Math.max(maxOnes, leftOnes + rightOnes + 1);
    }
  }

  if (!A.includes('0')) {
    return ones;
  }

  return Math.min(maxOnes, ones);
}

// Example Usage
const A11 = "111000";
const A22 = "111011101";
const A33 = "111111111";
const A44 = "1101101111111111";

console.log(`Input 1: A = ${A11}, Output 1: ${longestOnes(A11)}`);
console.log(`Input 2: A = ${A22}, Output 2: ${longestOnes(A22)}`);
console.log(`Input 3: A = ${A33}, Output 3: ${longestOnes(A33)}`);
console.log(`Input 4: A = ${A44}, Output 4: ${longestOnes(A44)}`);

/*

Q1. Length of longest consecutive ones
Solved
feature icon
Using hints except Complete Solution is Penalty free now
Use Hint
Given a binary string A. It is allowed to do at most one swap between any 0 and 1. Find and return the length of the longest consecutive 1’s that can be achieved.


Input Format

The only argument given is string A.
Output Format

Return the length of the longest consecutive 1’s that can be achieved.
Constraints

1 <= length of string <= 1000000
A contains only characters 0 and 1.
For Example

Input 1:
    A = "111000"
Output 1:
    3

Input 2:
    A = "111011101"
Output 2:
    7

*/