const addBinary = function (A, B) {
  let i = A.length - 1;
  let j = B.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;
    if (i >= 0) {
      sum += parseInt(A[i]);
      i--;
    }
    if (j >= 0) {
      sum += parseInt(B[j]);
      j--;
    }

    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }

  return result;
};


addBinary("100", "11"); // Output: "111"
addBinary("110", "10"); // Output: "1000"
// addBinary("1", "111"); // Output: "1000"
// addBinary("111", "111"); // Output: "1110"

/* 

Q2. Add Binary Strings
Using hints except Complete Solution is Penalty free now
Given two binary strings A and B. Return their sum (also a binary string).


Problem Constraints
1 <= length of A <= 105
1 <= length of B <= 105
A and B are binary strings



Input Format
The two argument A and B are binary strings.


Output Format
Return a binary string denoting the sum of A and B


Example Input

Input 1:
A = "100"
B = "11"
Input 2:
A = "110"
B = "10"


Example Output
Output 1:
"111"
Output 2:
"1000"


Example Explanation
For Input 1:
The sum of 100 and 11 is 111.
For Input 2:
 
*/
