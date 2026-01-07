
const maximumMatrixSum = function (matrix) {
  let totalSum = 0;
  let negativeCount = 0;
  let minAbsValue = Infinity;
  
  for(let row of matrix) {
    for(let value of row) {
      const absValue = Math.abs(value);
      totalSum += absValue;
      if(value < 0) negativeCount++;
      minAbsValue = Math.min(minAbsValue, absValue);
    }
}

  if (negativeCount % 2 === 1) {
    totalSum -= 2 * minAbsValue;
  }

    return totalSum;

};

// Example usage:
const matrix = [[-1,-1,-1],[-1,2,3],[-1,-1,-1]];
console.log(maximumMatrixSum(matrix)); // Output: 16