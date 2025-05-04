const VowelsInRange = (A, B) => {
  let result = [];
  let vowel = [97, 101, 105, 111, 117];
  for (let i = 0; i < B.length; i++) {
    let count = 0;
    for (let j = B[i][0]; j <= B[i][1]; j++) {
      let code = A[j].charCodeAt(0);
      if (vowel.includes(code)) {
        count++;
      }
    }

    result.push(count);
  }
  return result;
};

const A = "scaler";
const B = [[0, 2], [2, 4]];


const A1 = "interviewbit";
const B1 = [[0, 4], [9, 10]];

// console.log(VowelsInRange(A, B)); // [1, 2]
// console.log(VowelsInRange(A1,B1)); // [2, 1]

// Time Complexity: O(N * M) where N is the length of A and M is the length of B
// Space Complexity: O(1) as we are using constant space for the vowel array and result array
// The space complexity of the result array is O(M) where M is the length of B as we are storing the count of vowels in each range in the result array.
// The overall space complexity is O(M) as the result array is the only variable that grows with the input size.
// The time complexity of the code is O(N * M) where N is the length of A and M is the length of B as we are iterating through each character in A for each range in B.


// Optimized Approach using Prefix Sum
// Time Complexity: O(N + M) where N is the length of A and M is the length of B
const VowelsInRangeWithPrefixSum = (A, B) => {
    const n = A.length;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const prefixVowelCounts = new Array(n + 1).fill(0);
  
    // 1. Precompute prefix vowel counts
    for (let i = 0; i < n; i++) {
      prefixVowelCounts[i + 1] = prefixVowelCounts[i] + (vowels.has(A[i]) ? 1 : 0);
    }
  
    const result = [];
    // 2. Process queries using prefix counts
    for (let i = 0; i < B.length; i++) {
      const L = B[i][0];
      const R = B[i][1];
  
      // Count = vowels up to index R (inclusive) - vowels up to index L-1 (inclusive)
      const count = prefixVowelCounts[R + 1] - prefixVowelCounts[L];
      result.push(count);
    }
  
    return result;
  };
  
  // Example Usage:
  console.log(VowelsInRangeWithPrefixSum(A, B)); // Output: [ 1, 1 ]
  console.log(VowelsInRangeWithPrefixSum(A, B)); // Output: [ 3, 2 ]
  