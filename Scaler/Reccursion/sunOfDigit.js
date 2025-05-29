
const SumOfDigits = (num) => {
  // Base case: if num is less than 10, return num
  if (num < 10) {
    return num;
  }
  
  // Recursive case: sum the digits of num
  let sum = 0;
  while (num > 0) {
    sum += num % 10; // Add the last digit to sum
    num = Math.floor(num / 10); // Remove the last digit
  }
  
  // Call the function recursively with the new sum
  return SumOfDigits(sum);
}