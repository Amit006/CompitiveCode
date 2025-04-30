const isCommonElement = (A,B) => {
  // Do not print the result or any output. Just return the result via this function.
  const freqA = new Map();
  const result = [];

  // Count frequencies of elements in array A
  for (const num of A) {
    freqA.set(num, (freqA.get(num) || 0) + 1);
  }

  // Iterate through array B and find common elements
  for (const num of B) {
    if (freqA.has(num) && freqA.get(num) > 0) {
      result.push(num);
      freqA.set(num, freqA.get(num) - 1); // Decrement frequency to handle duplicates
    }
  }

  return result;
};


console.log(isCommonElement([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]
console.log(isCommonElement([1, 2, 3], [4, 5, 6])); // Output: []