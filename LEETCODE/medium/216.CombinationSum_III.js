const combinationSum3 = (k, n) => {
  const result = [];

  const backtrack = (start, path, sum) => {
    if (path.length === k && sum === n) {
      result.push([...path]);
      return;
    }
    if (path.length > k || sum > n) return;

    for (let i = start; i <= 9; i++) {
      path.push(i);
      backtrack(i + 1, path, sum + i); // Avoid repeats by using i+1
      path.pop();
    }
  };

  backtrack(1, [], 0);
  return result;
};

// console.log(combinationSum3(3, 7)); // [[1,2,4]]
// console.log(combinationSum3(3, 9)); // [[1,2,6],[1,3,5],[2,3,4]]
// console.log(combinationSum3(4, 1)); // []

// bit optimized version 0 second 
const combinationSum3V1 = (k, n) => {
  const result = [];

  if (k <= 0 || n <= 0 || k > n) return result;

  const backtrack = (start, combinationPath, sum) => {
    if (combinationPath.length === k && sum == n) {
      return result.push([...combinationPath]);
    }

    for (let i = start; i <= 9; i++) {
      if (sum + i > n) continue;
      if (combinationPath.length == k - 1 && sum + i != n) continue;

      combinationPath.push(i);
      sum += i;
      backtrack(i + 1, combinationPath, sum);
      sum -= i;
      combinationPath.pop();
    }
  };
  backtrack(1, [], 0);

  return result;
};

// console.log(combinationSum3V1(3, 7)); // [[1,2,4]]

// Iterative  approach  with manual handling of stack
const combinationSum3V2 = (k, n) => {
  const result = [];

  const stack = [];
  stack.push({ start: 1, path: [], sum: 0 });
  while (stack.length) {
    const { start, path, sum } = stack.pop();

    if (path.length === k && sum === n) {
      result.push([...path]);
      continue;
    }
    for (let i = start; i <= 9; i++) {
      if (sum + i > n) continue;
      if (path.length == k - 1 && sum + i != n) continue;
      stack.push({ start: i + 1, path: [...path, i], sum: sum + i });
    }
  }

  return result;
};

// console.log(combinationSum3V2(3, 7)); // [[1,2,4]]

// this is a neat iterative approach to generate combinations in lexicographical order take 0 second l
function combinationSum3v4(k, n) {
  let result = [];
  if (k > 9) return result; // Impossible if k > 9

  // Initialize combination array with smallest lex combo: [1,2, ..., k]
  let combination = [];
  for (let i = 0; i < k; i++) {
    combination[i] = i + 1;
  }

  while (true) {
    // Calculate the sum
    let sum = combination.reduce((a, b) => a + b, 0);
    if (sum === n) {
      result.push([...combination]);
    }

    // Find position to increment starting from the end
    let i = k - 1;
    while (i >= 0 && combination[i] === 9 - (k - 1 - i)) {
      i--;
    }

    // If no position to increment, we are done
    if (i < 0) {
      break;
    }

    // Increment the current position
    combination[i]++;

    // Reset elements after position i to consecutive increasing values
    for (let j = i + 1; j < k; j++) {
      combination[j] = combination[j - 1] + 1;
    }
  }

  return result;
}



console.log(combinationSum3v4(9, 45));

module.exports = { combinationSum3, combinationSum3V1, combinationSum3V2 };
