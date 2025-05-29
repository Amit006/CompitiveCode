
/*
Q2. Sum of Digits!
Solved
feature icon
Using hints except Complete Solution is Penalty free now
Use Hint
Problem Description

Given a number A, we need to find the sum of its digits using recursion.


Problem Constraints

1 <= A <= 109


Input Format

The first and only argument is an integer A.


Output Format

Return an integer denoting the sum of digits of the number A.


Example Input

Input 1:

 A = 46
Input 2:

 A = 11


Example Output

Output 1:

 10
Output 2:

 2


Example Explanation

Explanation 1:

 Sum of digits of 46 = 4 + 6 = 10
Explanation 2:

 Sum of digits of 11 = 1 + 1 = 2

*/


const SumOfDigits = (A) => {
  if (A < 10) return A;
  return parseInt(A % 10) + SumOfDigits(parseInt(A / 10));
};

console.log(SumOfDigits(1234)); // Output: 10
console.log(SumOfDigits(9999)); // Output: 36