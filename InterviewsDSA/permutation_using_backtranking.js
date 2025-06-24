const assert = require("assert");

function Permute(arr) {
  const result = [];
  const n = arr.length;
  const currentPermutation = [];
  const visited = new Array(n).fill(false);

  // Sort the array to group duplicates together
  arr.sort((a, b) => a - b);

  function backtrack() {
    // console.log("Current Permutation:", currentPermutation);
    if (currentPermutation.length === n) {
      result.push([...currentPermutation]);
      // console.log("Found a result:", result);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (visited[i]) {
        continue;
      }

        // Skip duplicates (only use the first occurrence when consecutive)
      if (i > 0 && arr[i] === arr[i - 1] && !visited[i - 1]) continue;

      currentPermutation.push(arr[i]);
      visited[i] = true;

      backtrack();

      visited[i] = false;
      // console.log("Backtracking, removing: Index", i);
      // console.log("Current Permutation before pop:", currentPermutation);
      currentPermutation.pop();
    }
  }

  console.log("Starting backtracking with array -------------------------- outside :");
  backtrack();

  return result;
}

let list = [1, 2, 3];
let output = [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1],
];

console.log("Generated Permutations for [1, 2, 3]:", Permute(list));

// assert.deepStrictEqual(
//     Permute(list)
//         .map((d) => d.join(""))
//         .sort(),
//     output
//         .map((d) => d.join(""))
//         .sort(),
//     "Test Case 1: The permutation function did not return the expected output for [1, 2, 3]."
// );

// const emptyArray = [];
// assert.deepStrictEqual(
//     Permute(emptyArray),
//     [],
//     "Test Case 2: Permutation of an empty array should return an empty array."
// );
// console.log("Permutations for []:", Permute(emptyArray));

// const singleElementArray = [42];
// assert.deepStrictEqual(
//     Permute(singleElementArray),
//     [[42]],
//     "Test Case 3: Permutation of a single element array should return the array itself."
// );
// console.log("Permutations for [42]:", Permute(singleElementArray));

// const arrayWithDuplicates = [1, 1, 2];
// const expectedWithDuplicates = [
//   [1, 1, 2], [1, 2, 1], [1, 1, 2], [1, 2, 1], [2, 1, 1], [2, 1, 1]
// ];
// console.log("Permutations for [1, 1, 2] (may include duplicates if not handled):", Permute(arrayWithDuplicates));

// console.log("\nAll tests passed!");
