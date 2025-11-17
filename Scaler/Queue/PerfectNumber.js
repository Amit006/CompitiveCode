/*

Problem Description

Given an integer A, you have to find the Ath Perfect Number.

A Perfect Number has the following properties:

It comprises only 1 and 2.
The number of digits in a Perfect number is even.
It is a palindrome number.
For example, 11, 22, 112211 are Perfect numbers, where 123, 121, 782, 1 are not.





Problem Constraints

1 <= A <= 100000



Input Format

The only argument given is an integer A.



Output Format

Return a string that denotes the Ath Perfect Number.



Example Input

Input 1:

 A = 2
Input 2:

 A = 3


Example Output

Output 1:

 22
Output 2:

 1111


Example Explanation

Explanation 1:

First four perfect numbers are:
1. 11
2. 22
3. 1111
4. 1221
Return the 2nd Perfect number.
Explanation 2:

First four perfect numbers are:
1. 11
2. 22
3. 1111
4. 1221
Return the 3rd Perfect number.



 
*/



// using BFS approach and dequeue 
const Dequeue = require('double-ended-queue');

const findAthPerfectNumber_BFS = function(A) {
    const dequeue = new Dequeue();
    dequeue.push("1");
    dequeue.push("2");
    let count = 0;

    for (let i = 0; i < A - 1; i++) {
        const front = dequeue.shift();
        dequeue.push(front + "1");
        dequeue.push(front + "2");
    }
    const result = dequeue.shift();
    const reversed = result.split("").reverse().join("");
    return result + reversed;
}


console.log(findAthPerfectNumber_BFS(2)); // 22
console.log(findAthPerfectNumber_BFS(3)); // 1111
console.log(findAthPerfectNumber_BFS(4));  // 1221


// mix of BFS and queue approach
 const findAthPerfectNumber = function(A) {  
    const dequeue = [];
    dequeue.push("1");
    dequeue.push("2");

    let count = 0;

     while (dequeue.length < A) {
        const front = dequeue[count];
        count += 1;
      
        dequeue.push(front + "1");
        dequeue.push(front + "2");
     }
        const reversed = dequeue[A-1].split("").reverse().join("");
        return  dequeue[A-1] + reversed;
}

// console.log(findAthPerfectNumber(2)); // 22
// console.log(findAthPerfectNumber(3)); // 1111
// console.log(findAthPerfectNumber(4)); // 1221
// console.log(findAthPerfectNumber(5)); // 2112
// console.log(findAthPerfectNumber(6)); // 2222