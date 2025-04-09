
const usexBitsFromRight = (n, x) => {
    const a = BigInt(A);
    const b = BigInt(B);
    const result = (a >> b) << b;
    return Number(result);
}


const usexBitsFromRight_v2 = (n, x) => {
    const a = BigInt(A);
    const b = BigInt(B);
    const mask = ~((1n << b) - 1n);
    const result = a & mask;
    return Number(result);
}

const usexBitsFromRight_v3 = (n, x) => {
    const a = BigInt(A);
    const b = BigInt(B);
    const mask = ~((1n << b) - 1n);
    const result = a & mask;
    return Number(result);
}


/*
Q4. Unset x bits from right
Unsolved
feature icon
Using hints except Complete Solution is Penalty free now
Use Hint
Problem Description

Given an integer A. Unset B bits from the right of A in binary.

For example, if A = 93 and B = 4, the binary representation of A is 1011101.
If we unset the rightmost 4 bits, we get the binary number 1010000, which is equal to the decimal value 80.


Problem Constraints

1 <= A <= 1018
1 <= B <= 60


Input Format

The first argument is a single integer A.
The second argument is a single integer B.


Output Format

Return the number with B unset bits from the right.


Example Input

Input 1:-
A = 25
B = 3
Input 2:-
A = 37
B = 3


Example Output

Output 1:-
24
Output 2:-
32


Example Explanation

Explanation 1:-
A = 11001 to 11000
Explantio 2:-
A = 100101 to 100000



*/