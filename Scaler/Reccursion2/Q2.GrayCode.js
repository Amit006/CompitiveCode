
/*
Q2. Gray Code
Solved
feature icon
Using hints except Complete Solution is Penalty free now
Use Hint
Problem Description

The gray code is a binary numeral system where two successive values differ in only one bit.

Given a non-negative integer A representing the total number of bits in the code, print the sequence of gray code.

A gray code sequence must begin with 0.



Problem Constraints

1 <= A <= 16



Input Format

The first argument is an integer A.



Output Format

Return an array of integers representing the gray code sequence.



Example Input

Input 1:

A = 2
Input 1:

A = 1


Example Output

output 1:

[0, 1, 3, 2]
output 2:

[0, 1]


Example Explanation

Explanation 1:

for A = 2 the gray code sequence is:
    00 - 0
    01 - 1
    11 - 3
    10 - 2
So, return [0,1,3,2].
Explanation 1:

for A = 1 the gray code sequence is:
    00 - 0
    01 - 1
So, return [0, 1].




*/



const grayCode = (A) => {
  if (A === 0) return [0]; // Edge case (not required by problem constraints)
  if (A === 1) return [0, 1]; // Base case

  // Recursively get Gray code for (A-1) bits
  const prev = grayCode(A - 1);

  // Reverse the previous sequence and add 2^(A-1) to each element
  const add = 1 << (A - 1); // Equivalent to 2^(A-1)
  const reversed = [...prev].reverse();
  const newPart = reversed.map((x) => x + add);

  // Concatenate the original and new parts
  return prev.concat(newPart);
};
