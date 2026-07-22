/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    while (b !== 0) {
        const carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
};
console.log(getSum(1, 2)); // Output: 3
console.log(getSum(2, 3)); // Output: 5