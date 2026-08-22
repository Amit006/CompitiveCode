/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function (n) {
    if (!n) return false;
    let temp = n,sum = 0, product = 1;
    while(temp > 0){
        const digit = temp % 10;
        sum+=digit;
        product*=digit;
        temp = Math.floor(temp / 10);
    }
    return (n % (sum + product)) === 0;
};

console.log(checkDivisibility(99)); // true
console.log(checkDivisibility(23)); // false