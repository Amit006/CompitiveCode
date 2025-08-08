let array = [4 , -1 , 2, 1];
let sum = 3;
let count = 0;

//  all possible subsequences formula is (2 ** n) -1 

function findTotalCountOfSumSubsequences(array, sum) {
    let n = array.length;
    let totalSubsequences = Math.pow(2, n) - 1;

    for (let i = 1; i <= totalSubsequences; i++) {
        let currentSum = 0;
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                currentSum += array[j];
            }
        }
        if (currentSum === sum) {
            count++;
        }
    }
    return count;
}



console.log(findTotalCountOfSumSubsequences(array, sum)); // Output: 2
// Explanation: The subsequences that sum to 3 are [4, -1], [-1, 2, 1]
// and [2, 1].  // Hence, the total count is 2.

// Time Complexity: O(2^n * n) where n is the size of the array
// Space Complexity: O(1) as we are using constant space for count and currentSum
// Note: The subsequences are counted based on the binary representation of the numbers from 1 to (2^n - 1).
