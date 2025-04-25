const lszero = (A) => {
    const n = A.length;
    const map = new Map();
    let sum = 0;
    let maxLen = 0;
    let start = -1;
    let end = -1;

    map.set(0, -1); // Initialize map with sum 0 at index -1

    for (let i = 0; i < n; i++) {
        sum += A[i];

        if (map.has(sum)) {
            const len = i - map.get(sum);
            if (len > maxLen) {
                maxLen = len;
                start = map.get(sum) + 1;
                end = i;
            }
        } else {
            map.set(sum, i);
        }
    }

    if (start === -1) {
        return [];
    }

    return A.slice(start, end + 1);
}


console.log(lszero([1, 2, -2, 4, -4])); // Output: [2, -2]
console.log(lszero([1, 2, 3, -3, -2])); // Output: [3, -3]


/*
Q3. Largest Continuous Sequence Zero Sum
Solved
feature icon
Using hints except Complete Solution is Penalty free now
Use Hint
Problem Description

Given an array A of N integers.

Find the largest continuous sequence in a array which sums to zero.



Problem Constraints

1 <= N <= 106

-107 <= A[i] <= 107



Input Format

Single argument which is an integer array A.



Output Format

Return an array denoting the longest continuous sequence with total sum of zero.

NOTE : If there are multiple correct answers, return the sequence which occurs first in the array.



Example Input

A = [1,2,-2,4,-4]


Example Output

[2,-2,4,-4]


Example Explanation

[2,-2,4,-4] is the longest sequence with total sum of zero
*/