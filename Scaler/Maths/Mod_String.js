const modString = (A, B) => {
  if (B === 0) return 0; // Handle division by zero
  let remainder = 0;
  for (let i = 0; i < A.length; i++) {
    const digit = parseInt(A[i], 10);

    remainder = (remainder * 10 + digit) % B;
    console.log(remainder, digit, B);
}
  return remainder;
};



let A = "143";
let B = 2;


let A1 = "43535321";
let B1 = 47;


console.log(modString(A, B)); // Output: 1
console.log(modString(A1, B1)); // Output: 20


/*
Q4. Mod String

Using hints except Complete Solution is Penalty free now

Problem Description

You are given a large number in the form of a string A where each character denotes a digit of the number.
You are also given a number B. You have to find out the value of A % B and return it.



Problem Constraints

1 <= A.length() <= 105
0 <= Ai <= 9
1 <= B <= 109


Input Format

The first argument is a string A.
The second argument is an integer B.


Output Format

Return a single integer denoting the value of A % B.


Example Input

Input 1:
A = "143"
B = 2
Input 2:

A = "43535321"
B = 47


Example Output

Output 1:
1
Output 2:

20


Example Explanation

Explanation 1:
143 is an odd number so 143 % 2 = 1.
Explanation 2:

43535321 % 47 = 20


*/