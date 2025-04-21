var numberOfArrays = function (differences, lower, upper) {
  let x = 0,
    y = 0,
    cur = 0;
  for (let d of differences) {
    cur += d;
    x = Math.min(x, cur);
    y = Math.max(y, cur);
    if (y - x > upper - lower) {
      return 0;
    }
  }

  return upper - lower - (y - x) + 1;
};


console.log(numberOfArrays([1, -3, 4], 1, 6)); // 2
// console.log(numberOfArrays([3, -2, 3], -1, 2)); // 0




// another alternative solution
/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {
    let minPrefixSum = 0; // Initialize with the prefix sum for hidden[0]
    let maxPrefixSum = 0; // Initialize with the prefix sum for hidden[0]
    let currentSum = 0;

    // Calculate min and max prefix sums
    for (let i = 0; i < differences.length; i++) {
        currentSum += differences[i];
        minPrefixSum = Math.min(minPrefixSum, currentSum);
        maxPrefixSum = Math.max(maxPrefixSum, currentSum);
    }

    // The minimum possible value for hidden[0] is lower - minPrefixSum.
    let minPossibleStart = lower - minPrefixSum;

    // The maximum possible value for hidden[0] is upper - maxPrefixSum.
    let maxPossibleStart = upper - maxPrefixSum;

    // The number of possible hidden sequences is the number of integers
    // in the range [minPossibleStart, maxPossibleStart].
    // This is maxPossibleStart - minPossibleStart + 1.
    // If maxPossibleStart < minPossibleStart, the range is empty, the count is 0.

    let numberOfValidStarts = maxPossibleStart - minPossibleStart + 1;

      // Ensure the count is not negative if the range is invalid
    return Math.max(0, numberOfValidStarts);
    
};