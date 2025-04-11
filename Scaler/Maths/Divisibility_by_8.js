const isDivisibleBy8 = (A) => {
  let num = 8;
  const postion = A.length - 3;
  const n = postion >= 0 ? parseInt(A.slice(postion, A.length)) : parseInt(A);
  const qofisent = n / num;
  const reminder = n % num;

  if (qofisent * num + reminder == n) return 1;

  return 0;
};

const isDivisibleBy8_v2 = (A) => {
  let arr = A.split("");
  let n = arr.length;
  let sum = 0;
  for (let i = n; i >= 0; i--) {
    sum += (arr[i] * Math.pow(10, n - i)) % 8;
  }
  return sum % 8 === 0 ? 1 : 0;
};

const A = "1234567890";
console.log(isDivisibleBy8(A)); // 0
console.log(isDivisibleBy8_v2(A)); // 0
const B = "12345678";
console.log(isDivisibleBy8(B)); // 1
console.log(isDivisibleBy8_v2(B)); // 1

/*

 Divisibility by 8
Solved
feature icon
Using hints except Complete Solution is Penalty free now
Use Hint
Problem Description

You are given a number A in the form of a string. Check if the number is divisible by eight or not.

Return 1 if it is divisible by eight else, return 0.


Problem Constraints

1 <= length of the String <= 100000
'0' <= A[i] <= '9'


Input Format

The only argument given is a string A.


Output Format

Return 1 if it is divisible by eight else return 0.


Example Input

Input 1:
A = "16"
Input 2:

A = "123"


Example Output

Output 1:
1
Output 2:

0


Example Explanation

Explanation 1:
 16 = 8 * 2
Explanation 2:

123 = 15 * 8 + 3

*/





/*
Why This Works
Mathematical Insight:
Any number 
N
N can be expressed as:
N
=
10
⋅
k
+
d
N=10⋅k+d, where k is the number formed by the first n-1 digits and d is the last digit.
Using modular arithmetic:
N
m
o
d
 
 
D
=
(
10
⋅
k
+
d
)
m
o
d
 
 
D
NmodD=(10⋅k+d)modD.
This allows us to compute the remainder iteratively.

Example:
For 
N
=
1234
N=1234 and 
D
=
7
D=7:

Copy
remainder = 0
→ Process '1': (0 * 10 + 1) % 7 = 1
→ Process '2': (1 * 10 + 2) % 7 = 12 % 7 = 5
→ Process '3': (5 * 10 + 3) % 7 = 53 % 7 = 4
→ Process '4': (4 * 10 + 4) % 7 = 44 % 7 = 2 → Not divisible by 7.


*/
/**
 * @param {string} A - The number as a string.
 * @param {number} D - The divisor to check.
 * @returns {number} 1 if divisible, 0 otherwise.
 */
const isDivisible = (A, D) => {
    if (D === 0) return 0; // Handle division by zero
    let remainder = 0;
    for (let i = 0; i < A.length; i++) {
        const digit = parseInt(A[i], 10);
        remainder = (remainder * 10 + digit) % D;
    }
    return remainder === 0 ? 1 : 0;
};


/*
Examples
Input (A)	Divisor (D)	Output	Explanation
"16"	8	1	
16
%
8
=
0
16%8=0
"123"	8	0	
123
%
8
=
3
123%8=3
"1000"	7	0	
1000
%
7
=
6
1000%7=6
"121"	11	1	
121
%
11
=
0
121%11=0
Key Advantages
Handles Any Divisor: Works for all integers 
D
>
0
D>0.

Efficiency: Processes each digit in O(1) time, leading to O(n) total time.

No Large-Number Issues: Avoids converting the entire string to a number, which can overflow for large inputs.

When to Use This Approach
Large Numbers: When the input string is too long to fit into standard integer types.

Generic Divisibility Checks: When the divisor is not known in advance (e.g., user input).

This method is widely used in competitive programming and real-world applications for efficient divisibility checks.

*/