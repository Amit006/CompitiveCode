
const longestPalindrome2 = (A) => {
  if (A.length === 0) return "";

  let start = 0;
  let maxLength = 1;

  const expandAroundCenter = (left, right) => {
    console.log("left", left, "right", right, "A[left]", A[left], "A[right]", A[right]);
    while (left >= 0 && right < A.length && A[left] === A[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < A.length; i++) {
    const len1 = expandAroundCenter(i, i); // Odd length
    const len2 = expandAroundCenter(i, i + 1); // Even length
    const currentMax = Math.max(len1, len2);
    console.log("currentMax", currentMax, "maxLength", maxLength);
    if (currentMax > maxLength) {
      maxLength = currentMax;
      start = i - Math.floor((currentMax - 1) / 2);
    }
  }

  return A.substr(start, maxLength);
};

console.log(longestPalindrome2("aaaabaaa")); // Output: "bab" or aba"



/*


Q7. Longest Palindromic Substring
Using hints except Complete Solution is Penalty free now
Use Hint
Problem Description

Given a string A of size N, find and return the longest palindromic substring in A.

Substring of string A is A[i...j] where 0 <= i <= j < len(A)

Palindrome string:
A string which reads the same backwards. More formally, A is palindrome if reverse(A) = A.

Incase of conflict, return the substring which occurs first ( with the least starting index).



Problem Constraints

1 <= N <= 6000



Input Format

First and only argument is a string A.



Output Format

Return a string denoting the longest palindromic substring of string A.



Example Input

Input 1:
A = "aaaabaaa"
Input 2:
A = "abba


Example Output

Output 1:
"aaabaaa"
Output 2:
"abba"


Example Explanation

Explanation 1:
We can see that longest palindromic substring is of length 7 and the string is "aaabaaa".
Explanation 2:
We can see that longest palindromic substring is of length 4 and the string is "abba".
*/