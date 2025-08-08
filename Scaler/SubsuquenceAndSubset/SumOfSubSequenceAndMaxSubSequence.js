const sumOfAllSubSequence = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }

  const sumOfElements = arr.reduce((acc, num) => acc + num, 0);

  return sumOfElements * Math.pow(2, arr.length - 1);
};

const sumOfMaxInSubsequences = (arr) => {
  const n = arr.length;
  // Sort the array in ascending order
  const sorted = [...arr].sort((a, b) => a - b);
  let result = 0;

  // For each element, calculate its contribution as max in subsequences
  // Each element is max in 2^(number of smaller elements) subsequences
  for (let i = 0; i < n; i++) {
    result += sorted[i] * Math.pow(2, i);
  }

  return result;
};


let array = [1, 3, 5, 7];

console.log("Sum of all subsequences:", sumOfAllSubsequences(array));  // 128
console.log("Sum of max in all subsequences:", sumOfMaxInSubsequences(array));  // 83