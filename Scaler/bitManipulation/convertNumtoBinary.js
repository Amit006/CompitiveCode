const convertToBinary = (A) => {
    const abc= parseInt(A/2);
    const reminder = A%2;

    if(abc == 1 || 0){
            return abc+reminder;
    }
   return  convertToBinary(abc)+reminder;
}


console.log(convertToBinary(10)); // Output: "1010"
console.log(convertToBinary(5)); // Output: "101"
console.log(convertToBinary(14)); // Output: "1110"


/*
 Number of 1 Bits
Unsolved
feature icon
Using hints except Complete Solution is Penalty free now
Use Hint
Problem Description

Write a function that takes an integer and returns the number of 1 bits present in its Binary representation.


Problem Constraints

1 <= A <= 109


Input Format

First and only argument contains integer A


Output Format

Return an integer


Example Input

Input 1:
11
Input 2:
6


Example Output

Output 1:
3
Output 2:
2


Example Explanation

Explaination 1:
11 is represented as 1011 in Binary.
Explaination 2:
6 is represented as 110 in Binary
*/