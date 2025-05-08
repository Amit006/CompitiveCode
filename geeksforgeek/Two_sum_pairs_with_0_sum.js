// problem link :- https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1

// User function Template for javascript

/**
 * @param {number[]} arr - input array
 * @returns {number[][]}
 */
// class Solution {
//     getPairs(arr) {
//         const pairs = [];
//         const seenPairs = new Set();

//         // Sort the array to handle duplicates and maintain order
//         arr.sort((a, b) => a - b);

//         let left = 0;
//         let right = arr.length - 1;

//         while (left < right) {
//             const sum = arr[left] + arr[right];
//             if (sum === 0) {
//                 const pair = [arr[left], arr[right]];
//                 const pairKey = pair.toString();

//                 if (!seenPairs.has(pairKey)) {
//                     pairs.push(pair);
//                     seenPairs.add(pairKey);
//                 }

//                 left++;
//                 right--;
//             } else if (sum < 0) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }

//         return pairs;
//     }
// }

// Example usage
// const solution = new Solution();

// let arr = [-1, 0, 1, 2, -1, -4];
// console.log(solution.getPairs(arr)); // Output: [[-1, 1]]

// arr = [6, 1, 8, 0, 4, -9, -1, -10, -6, -5];
// console.log(solution.getPairs(arr)); // Output: [[-6, 6], [-1, 1]]

const getPairs = (arr) => {
  let seenPairs = new Map();
  let target = 0;
  for (let num of arr) {
    {
      const complemnt = target - num;
      if (seenPairs.has(complemnt)) {
        seenPairs.set(complemnt, [complemnt, num]);
      }
      seenPairs.set(num, false);
    }
  }
  let result = [...seenPairs.values()].filter((pair) => pair !== false);
  return result;
};
// let arri = [-1, 0, 1, 2, -1, -4];
// console.log(getPairs(arri)); // Output: [[-1, 1]]

// let arr2 = [6, 1, 8, 0, 4, -9, -1, -10, -6, -5];
// console.log(getPairs(arr2)); // Output: [[-6, 6], [-1, 1]]




// findZeroSumSubsets function to find all subsets of an array that sum to zero
function findZeroSumSubsets(nums) {
    let result = [];
    
    function backtrack(start, subset) {
        let sum = subset.reduce((acc, num) => acc + num, 0);
        if (sum === 0 && subset.length > 0) {  
            result.push([...subset]); 
        }

        for (let i = start; i < nums.length; i++) {
            subset.push(nums[i]);  
            backtrack(i + 1, subset);
            subset.pop();  
        }
    }

    backtrack(0, []);
    return result;
}

let arri = [-1, 0, 1, 2, -1, -4];
console.log(findZeroSumSubsets(arri)); // Output: [[-1, 1]]

let arr2 = [6, 1, 8, 0, 4, -9, -1, -10, -6, -5];
console.log(findZeroSumSubsets(arr2)); // Output: [[-6, 6], [-1, 1]]

