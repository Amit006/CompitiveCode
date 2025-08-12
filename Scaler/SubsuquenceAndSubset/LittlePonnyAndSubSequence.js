/*
Q1. Little Ponny and 2-Subsequence

Using hints except Complete Solution is Penalty free now
Use Hint
Problem Description

Little Ponny has been given a string A, and he wants to find out the lexicographically minimum subsequence from it of size >= 2. Can you help him?
A string a is lexicographically smaller than string b, if the first different letter in a and b is smaller in a. For example, "abc" is lexicographically smaller than "acc" because the first different letter is 'b' and 'c' which is smaller in "abc".

 

Problem Constraints
1 <= |A| <= 105
A only contains lowercase alphabets.



Input Format
The first and the only argument of input contains the string, A.

Output Format
Return a string representing the answer.



Example Input
Input 1:
 A = "abcdsfhjagj" 

 Input 2:
 A = "ksdjgha" 


Example Output
Output 1:
 "aa" 
Output 2:
 "da" 


Example Explanation
Explanation 1:
 "aa" is the lexicographically minimum subsequence from A. 
Explanation 2:
 "da" is the lexicographically minimum subsequence from A. 

*/


// different approach
const input = "abcdsfhjagj";
const input2 = "ksdjgha";

const input3 = "scsecugqsb";

const input4 = "djjhibvetj";

const LittlePonnyAndSubsequence2 = (A) => {
  let actualArray = A.split("").map((char) => char.charCodeAt(0) - 97);
  let pair = "";

  let smallestChar = Math.min(...actualArray);
  let secondSmallestChar = Infinity;
  if (actualArray.indexOf(smallestChar) !== actualArray.length - 1) {
    secondSmallestChar = Math.min(
      ...actualArray.slice(
        actualArray.indexOf(smallestChar) + 1,
        actualArray.length
      )
    );
    pair =
      String.fromCharCode(smallestChar + 97) +
      String.fromCharCode(secondSmallestChar + 97);
  } else {
    secondSmallestChar = Math.min(
      ...actualArray.slice(0, actualArray.length - 1)
    );
    pair =
      String.fromCharCode(secondSmallestChar + 97) +
      String.fromCharCode(smallestChar + 97);
  }

  return pair;
};

// console.log(LittlePonnyAndSubsequence2(input)); // Output: "aa"
// console.log(LittlePonnyAndSubsequence2(input2)); // Output: "da"
// console.log(LittlePonnyAndSubsequence2(input3)); // Output: "da"
// console.log(LittlePonnyAndSubsequence2(input4)); // Output: "da"

function suffixMinSubSequence(A) {
  const n = A.length;
  // Suffix min: at each position, store smallest char from i+1 to end
  const suffixMin = Array(n).fill("");
  suffixMin[n - 1] = "{"; // '{' is just after 'z', acts as infinity

  // Build suffix min
  for (let i = n - 2; i >= 0; i--) {
    suffixMin[i] = A[i + 1] < suffixMin[i + 1] ? A[i + 1] : suffixMin[i + 1];
  }

  let minPair = null;
  for (let i = 0; i < n - 1; i++) {
    const candidate = A[i] + suffixMin[i];
    if (minPair === null || candidate < minPair) {
      minPair = candidate;
    }
  }
  return minPair;
}


console.log(suffixMinSubSequence(input)); // Output: "aa"
console.log(suffixMinSubSequence(input2)); // Output: "da"
console.log(suffixMinSubSequence(input3)); // Output: "da"
console.log(suffixMinSubSequence(input4)); // Output: "da"
