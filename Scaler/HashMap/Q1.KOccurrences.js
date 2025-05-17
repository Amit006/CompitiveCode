const getSum = (A, B, C) => {
  let sum = null;
  let hashMap = new Map();

  for (let i = 0; i < A; i++) {
    // Use C.length here
    let item = C[i];
    hashMap.set(item, (hashMap.get(item) || 0) + 1);
  }

  for (let item of hashMap.keys()) {
    // Use C.length here
    if (hashMap.get(item) === B) {
      sum = (sum + item) % 1000000007;
    }
  }

  return sum != null ? sum : -1;
};

console.log(getSum(6, 2, [1, 2, 2, 3, 3, 3])); // Output: 4
// console.log(getSum(3, 2, [0,0,1])); // Output: 4
// console.log(getSum(4, 1, [0,0,0,0])); // Output: 4
