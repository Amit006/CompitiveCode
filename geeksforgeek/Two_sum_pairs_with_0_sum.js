// problem link :- https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1



// User function Template for javascript

/**
 * @param {number[]} arr
 * @returns {number[][]}
 */
class Solution {
    getPairs(arr) {
        const pairs = [];
        const seenPairs = new Set();
        
        // Sort the array to handle duplicates and maintain order
        arr.sort((a, b) => a - b);
        
        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            const sum = arr[left] + arr[right];
            if (sum === 0) {
                const pair = [arr[left], arr[right]];
                const pairKey = pair.toString();

                if (!seenPairs.has(pairKey)) {
                    pairs.push(pair);
                    seenPairs.add(pairKey);
                }

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }

        return pairs;
    }
}

// Example usage
// const solution = new Solution();

// let arr = [-1, 0, 1, 2, -1, -4];
// console.log(solution.getPairs(arr)); // Output: [[-1, 1]]

// arr = [6, 1, 8, 0, 4, -9, -1, -10, -6, -5];
// console.log(solution.getPairs(arr)); // Output: [[-6, 6], [-1, 1]]