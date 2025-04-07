

const helpFromSam2 = (A) => {
    if(!A) return A;
    let count = 1;
    while(A > 1){
        const reminder = A % 2;
        if(reminder) count++
        A= parseInt(A/2);

    }
    return count;
}


// helpFromSam2(7)
// console.log(helpFromSam2(7));


//500 ms
const helpFromSam3 = (A) => {
    let ans = 0;
    while(A > 0){
        if(A % 2 === 1) ans++;
        A = Math.floor(A / 2);
    }
    return ans;
}
// console.log(helpFromSam3(7));


/**
 * Calculates the minimum number of times Alex needs to take help from Sam.
 * This is equivalent to counting the number of set bits (1s) in the binary representation of A.
 * 
 * @param {number} A - Target score
 * @return {number} Minimum number of times help is needed from Sam
 * 210 ms
 */

const helpFromSam = (A) => {   
    if (A <= 0) return 0;
    
    // Count the number of set bits (1s) in the binary representation of A
    let count = 0;
    while (A > 0) {
        // Bitwise AND with 1 checks if the least significant bit is set
        count += (A & 1);
        // Right shift to check the next bit
        A = A >> 1;
    }
    
    return count;
};  

// Test cases
console.log(helpFromSam(7));  // Expected: 3 (binary: 111 has three 1s)
console.log(helpFromSam(5));  // Expected: 2 (binary: 101 has two 1s)
console.log(helpFromSam(3));  // Expected: 2 (binary: 11 has two 1s)
console.log(helpFromSam(0));  // Expected: 0 (binary: 0 has zero 1s)

/**
 * Alternative implementation using built-in method to count bits
 * This is even more concise but may not be available in all JavaScript environments
 * 
 * @param {number} A - Target score
 * @return {number} Minimum number of times help is needed from Sam
 * 283 ms
 */
const helpFromSamOneLiner = (A) => {
    return A.toString(2).split('1').length - 1;
};

console.log("Using one-liner method:");
console.log(helpFromSamOneLiner(7));  // Expected: 3
console.log(helpFromSamOneLiner(5));  // Expected: 2
console.log(helpFromSamOneLiner(3));  // Expected: 2
console.log(helpFromSamOneLiner(0));  // Expected: 0

/*
Problem Explanation:

The problem asks for the minimum number of times Alex needs help from Sam to achieve a score of A.
Alex can either:
1. Double his current score (equivalent to shifting left by 1 bit)
2. Get help from Sam to add 1 to his score (equivalent to setting a bit to 1)

To minimize the help from Sam, Alex should double his score whenever possible.
This means the minimum number of times Alex needs help is equal to the number of 1 bits in the binary representation of A.

For example:
- For A = 5 (binary: 101), Alex needs help twice (to set the two 1 bits)
- For A = 3 (binary: 11), Alex needs help twice (to set the two 1 bits)
- For A = 7 (binary: 111), Alex needs help three times (to set the three 1 bits)

The bitwise solution is more efficient than the previous approaches because:
1. It directly counts the set bits without division operations
2. Bitwise operations are generally faster than arithmetic operations
3. It's more concise and clearly expresses the intent of the algorithm
*/



/*

Problem Description

Alex and Sam are good friends. Alex is doing a lot of programming these days. He has set a target score of A for himself.
Initially, Alex's score was zero. Alex can double his score by doing a question, or Alex can seek help from Sam for doing questions that will contribute 1 to Alex's score. Alex wants his score to be precisely A. Also, he does not want to take much help from Sam.

Find and return the minimum number of times Alex needs to take help from Sam to achieve a score of A.


Problem Constraints

0 <= A <= 10^9


Input Format

The only argument given is an integer A.


Output Format

Return the minimum number of times help taken from Sam.


Example Input

Input 1:
A = 5
Input 2:

A = 3


Example Output

Output 1:
2
Output 2:

2


*/