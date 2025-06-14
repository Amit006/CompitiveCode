// lloyds Interview question
// Given an array of numbers, return all the possible permutations of the array.
const assert = require("assert");

let list = [1, 2, 3];
let output = [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1],
];

function Permute(arr) {
  let newHashSet = new Set();
  let n = list.length;

  newHashSet.add(arr.join(""));
  newHashSet.add([...arr].reverse().join(""));

  // revserse apporch
  for (let i = 0; i < n-1; i++) {
    let newArr = JSON.parse(JSON.stringify(arr));
    swap(newArr, i, i + 1, arr[i]);
    // add the newArr to result if it is not already in the hashSet
    addInHashSet(newArr, newHashSet);

    // reverse the newArr and add it to the hashSet
    let revsersedArr = newArr.reverse();
    addInHashSet(revsersedArr, newHashSet);
  }

  return [...newHashSet].map((item) => item.split("").map(Number));
}

const swap = (arr, oldIndex, index, val) => {
  // console.log(arr, oldIndex, index, val);
  let temp = arr[index];
  arr[index] = val;
  arr[oldIndex] = temp;
};

const addInHashSet = (arr, hashSet) => {
  let key = arr.join("");
  if (!hashSet.has(key)) {
    hashSet.add(key);
    return true;
  }
  return false;
};

console.log(Permute(list));
// Output should match the output variable defined above
assert.deepStrictEqual(
  Permute(list)
    .map((d) => d.join(""))
    .sort(),
  output.map((d) => d.join("")).sort(),
  "The permutation function did not return the expected output."
);
console.log("All tests passed!");
