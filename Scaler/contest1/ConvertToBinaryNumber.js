const convertToBinaryNumber = (A,B) => {
  let binaryArray = new Array(A+B).fill(1, 0, A).fill(0, A, A+B);
  let binaryNumber = 0;
  let n= binaryArray.length-1;
  for (let i = n; i >= 0; i--) {
    binaryNumber += binaryArray[i] * Math.pow(2, (n) - i);
  }
  return binaryNumber;
};

console.log(convertToBinaryNumber(3, 2)); // Output: 24
console.log(convertToBinaryNumber(2, 3)); // Output: 16