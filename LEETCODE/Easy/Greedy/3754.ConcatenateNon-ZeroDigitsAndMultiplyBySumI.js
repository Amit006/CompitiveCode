/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function (n) {
    let sum = 0, t = '';

    while (n) {
        const rem = n % 10;
        if (rem) t = rem + t;
        sum += rem;
        n = parseInt(n / 10);

    }
    return sum * (parseInt(t) || 0);
};

console.log(sumAndMultiply(123)); // 36
console.log(sumAndMultiply(101)); // 2
console.log(sumAndMultiply(1020300040500560006098)); // 69135151055152