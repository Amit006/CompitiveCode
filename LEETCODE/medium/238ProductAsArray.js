var productExceptSelf = function (nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);

  let prefix = 1;
  for (let i = 1; i < n; i++) {
    prefix *= nums[i - 1];
    result[i] = prefix;
  }

  let suffix = 1;
  for (let i = n - 2; i >= 0; i--) {
    suffix *= nums[i + 1];
    result[i] *= suffix;
  }

  return result;
};

const input = [1, 2, 3, 4];
const input2 = [-1, 1, 0, -3, 3];
const input3 = [-1, 1];
// console.log(productExceptSelf(input)); // Output: [24, 12, 8, 6]
console.log(productExceptSelf(input2)); // Output: [0, 0, 9, 0, 0]
// console.log(productExceptSelf(input3)); // Output: [1, -1]

let ProductAsArray = (A) => {
  const n = A.length;
  const prefixProduct = new Array(n).fill(1);
  const suffixProduct = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    prefixProduct[i] = prefixProduct[i - 1] * A[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    suffixProduct[i] = suffixProduct[i + 1] * A[i + 1];
  }

  return prefixProduct.map((val, index) => val * suffixProduct[index]);
};

// console.log(ProductAsArray(input2)); // Output: [24, 12, 8, 6]
// console.log(ProductAsArray(input3)); // Output: [1, -1]

// Fastest solution using prefix and suffix products
let ProductAsArray2 = (nums) => {
  const n = nums.length;
  const result = Array(n).fill(1);

  // Prefix product
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  // Suffix product
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }
  return result;
};
