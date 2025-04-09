// O(n) approch
const subarraysWithBitwiseOR1 = (A) => {
  let count = 0;
  let lastOne = -1;

  for (let i = 0; i < A; i++) {
    if (B[i]) {
      // When we find 1, all subarrays from lastOne+1 to i will contribute
      count += (i - lastOne) * (A - i);
      lastOne = i;
    }
  }
  return count;
};

/*
### Approach
1. **Total Subarrays Calculation**: The total number of subarrays in an array of length \( A \) is given by \( \frac{A \times (A + 1)}{2} \).
2. **Count All-Zero Subarrays**: We need to subtract the number of subarrays that consist entirely of zeros from the total subarrays. To do this efficiently:
   - Traverse the array and track consecutive sequences of zeros.
   - For each sequence of zeros of length \( k \), the number of subarrays is \( \frac{k \times (k + 1)}{2} \).
   - Sum these values for all zero sequences to get the total number of all-zero subarrays.
3. **Result Calculation**: Subtract the number of all-zero subarrays from the total number of subarrays to get the desired count.



*/

const subarraysWithBitwiseOR1_v2 = (A) => {
  let totalZeros = 0;
  let currentZero = 0;
  for (const num of B) {
    if (num === 0) {
      currentZero++;
    } else {
      totalZeros += (currentZero * (currentZero + 1)) / 2;
      currentZero = 0;
    }
  }
  // Add any remaining zeros after the last 1
  totalZeros += (currentZero * (currentZero + 1)) / 2;

  const totalSubarrays = (A * (A + 1)) / 2;
  return totalSubarrays - totalZeros;
};
