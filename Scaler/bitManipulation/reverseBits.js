

const reverseBits = (A) => {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    // Shift ans left by 1 to make space for the next bit
    ans <<= 1;
    // Set the least significant bit of ans to the least significant bit of A
    ans |= A & 1;
    // Shift A right by 1 to process the next bit
    A >>= 1;

  }

 
  // The >>> operator is used to treat the result as a 32-bit unsigned integer
  return ans >>> 0;
}

// explain the code
// 1. Initialize a variable `ans` to 0. This variable will hold the reversed bits of the input number `A`.
// 2. Use a for loop that iterates 32 times (for each bit in a 32-bit integer).
// 3. In each iteration, perform the following steps:
//    a. Left shift `ans` by 1 bit (this makes space for the next bit).
//    b. Use the bitwise OR operator to set the least significant bit of `ans` to the least significant bit of `A` (A & 1).
//    c. Right shift `A` by 1 bit to process the next bit in the next iteration.
// 4. After the loop, return `ans` as an unsigned integer using `>>> 0` to ensure that the result is treated as a 32-bit unsigned integer.
// 5. The final result is the reversed bits of the input number `A`.
console.log(reverseBits(3)); // Output: 3221225472 (0b11000000000000000000000000000000)
// 3 in binary is