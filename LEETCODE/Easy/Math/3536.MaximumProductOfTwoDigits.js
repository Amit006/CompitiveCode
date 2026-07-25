
/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function (n) {
   let  sortedArr = String(n).split("").map(d=>parseInt(d)).sort();

   return sortedArr.at(-1) * sortedArr.at(-2);
};

console.log(maxProduct(29)); // Output: 18
console.log(maxProduct(10)); // Output: 0
console.log(maxProduct(99)); // Output: 81






// optimized solution
var maxProduct = function (n) {
  let max1 = 0, max2 = 0;
  while (n > 0) {
    const d = n % 10;
    n = (n - d) / 10;
    if (d > max1) { max2 = max1; max1 = d; }
    else if (d > max2) { max2 = d; }
    if (max1 === 9 && max2 === 9) return 81;
  }
  return max1 * max2;
};

console.log(maxProduct(29)); // Output: 18
console.log(maxProduct(10)); // Output: 0
console.log(maxProduct(99)); // Output: 81