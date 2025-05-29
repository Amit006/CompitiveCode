
/*
Q1. Is Dictionary?
Solved
feature icon
Using hints except Complete Solution is Penalty free now
Use Hint
Problem Description

Surprisingly, in an alien language, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.




Given an array of words A of size N written in the alien language, and the order of the alphabet denoted by string B of size 26, return 1 if and only if the given words are sorted lexicographically in this alien language else, return 0.






Problem Constraints

1 <= N, length of each word <= 105

Sum of the length of all words <= 2 * 106






Input Format

The first argument is a string array A of size N.




The second argument is a string B of size 26, denoting the order.






Output Format

Return 1 if and only if the given words are sorted lexicographically in this alien language else, return 0.



Example Input

Input 1:

 A = ["hello", "scaler", "interviewbit"]
 B = "adhbcfegskjlponmirqtxwuvzy"
Input 2:

 A = ["fine", "none", "bush"]
 B = "qwertyuiopasdfghjklzxcvbnm"


Example Output

Output 1:

 1
Output 2:

 0


Example Explanation

Explanation 1:

 The order shown in string B is: h < s < i (adhbcfegskjlponmirqtxwuvzy) for the given words. 
 So, Return 1.
Explanation 2:

 "none" should be present after "bush", Since b < n (qwertyuiopasdfghjklzxcvbnm). 
 So, Return 0.

*/
const isDictionary = (value) => {
    // Create a mapping of each character to its position in the alien alphabet
    let orderMap = new Map();
    for (let i = 0; i < B.length; i++) {
        orderMap.set(B[i], i);
    }

    // Helper function to compare two words based on the alien dictionary
    function isOrdered(word1, word2) {
        let len1 = word1.length, len2 = word2.length;
        let minLen = Math.min(len1, len2);

        for (let i = 0; i < minLen; i++) {
            let char1 = word1[i], char2 = word2[i];
            if (char1 !== char2) {
                return orderMap.get(char1) < orderMap.get(char2);
            }
        }
        
        return len1 <= len2; // Ensure shorter words come before longer versions
    }

    // Check if all adjacent words are correctly ordered
    for (let i = 0; i < A.length - 1; i++) {
        if (!isOrdered(A[i], A[i + 1])) {
            return 0; // Not sorted
        }
    }

    return 1; // Sorted correctly
}