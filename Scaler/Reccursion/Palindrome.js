/*

Given a string A, check if it is a palindrome or not. Return 1 if it is a palindrome, else return 0.


*/
const isPalindrome = (str) => {
  if (A.length <= 1) return 1;
  if (A[0] == A[A.length - 1]) {
    let remaningStr = A.substring(1, A.length - 1);

    return this.solve(remaningStr);
  } else return 0;
};



//  faster then previous solution
const isPalindrome2 = (str, start = 0, end = str.length - 1) => {
     // Base case 1: If the start index is greater than or equal to the end index,
    // the substring being considered is either empty or has one character, which is a palindrome.
    if (start >= end) {
        return true;
    }

    // Base case 2: If the characters at the start and end indices are not the same,
    // the string is not a palindrome.
    if (str[start] !== str[end]) {
        return false;
    }

    // Recursive step: Move the start index one step forward and the end index one step backward,
    // and check the inner substring.
    return isPalindromeRecursiveSingle(str, start + 1, end - 1);
}