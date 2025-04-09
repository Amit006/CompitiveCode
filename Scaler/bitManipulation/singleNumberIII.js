const singleNumberIII = (A) => {
  let xor = 0;
  for (let num of A) {
    xor ^= num;
  }

  let rightmostSetBit = xor & -xor;

  let firstNum = 0;
  let secondNum = 0;

  for (let num of A) {
    if (num & rightmostSetBit) {
      firstNum ^= num;
    } else {
      secondNum ^= num;
    }
  }

  return [firstNum, secondNum];
};
// explain the code
// 1. Initialize a variable `xor` to 0. This variable will hold the XOR of all elements in the array `A`.
// 2. Iterate through each number in the array `A` and perform a bitwise XOR operation with `xor`. This will give us the XOR of all elements.
// 3. Find the rightmost set bit in `xor` using the expression `xor & -xor`. This helps us identify a distinguishing bit between the two unique numbers.
// 4. Initialize two variables `firstNum` and `secondNum` to 0. These will hold the two unique numbers we want to find.
// 5. Iterate through each number in the array `A` again. For each number, check if the rightmost set bit is set (i.e., if the number has that bit as 1).
// 6. If the rightmost set bit is set, perform a bitwise XOR operation with `firstNum`. Otherwise, perform a bitwise XOR operation with `secondNum`.
// 7. After the loop, `firstNum` and `secondNum` will hold the two unique numbers that appear only once in the array `A`.
// 8. Return an array containing `firstNum` and `secondNum` as the result.
// 9. The final result is an array of the two unique numbers found in the input array `A`.

// console.log(singleNumberIII([1, 2, 3, 2, 1])); // Output: [3, 0]
// console.log(singleNumberIII([1, 2, 2])); // Output: [1, 0]
// console.log(singleNumberIII([1, 1, 2, 2, 3])); // Output: [3, 0]
// console.log(singleNumberIII([1, 2, 3, 4, 5])); // Output: [0, 0]

// testing the function
// console.log(singleNumberIII([1, 2, 3, 2, 1])); // Output: [3, 0]
// console.log(singleNumberIII([1, 2, 2])); // Output: [1, 0]
// console.log(singleNumberIII([1, 1, 2, 2, 3])); // Output: [3, 0]

const singleNumberIII_two = (A) => {
  const xs = A.reduce((a, b) => a ^ b);
  const lb = xs & -xs; // what is lb and -lb? lb is the rightmost set bit of xs, and -lb is the two's complement of lb.
  let a = 0;
  for (const x of A) {
    if (x & lb) {
      a ^= x;
    }
  }
  const b = xs ^ a;
  return [a, b].sort((a, b) => a - b);
};

//  testing the function
console.log(singleNumberIII_two([1, 2, 3, 2, 1, 4])); // Output: [3, 4]
console.log(singleNumberIII_two([1, 2, 2, 3])); // Output: [1, 3]
console.log(singleNumberIII_two([0, 1, 1, 2, 2, 3])); // Output: [3, 0]
