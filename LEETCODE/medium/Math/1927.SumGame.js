/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function(num) {
    const n = num.length;
    const half = n / 2;

    let leftSum = 0, rightSum = 0;
    let leftQ = 0, rightQ = 0;

    for (let i = 0; i < half; i++) {
        if (num[i] === '?') leftQ++;
        else leftSum += num.charCodeAt(i) - 48;
    }

    for (let i = half; i < n; i++) {
        if (num[i] === '?') rightQ++;
        else rightSum += num.charCodeAt(i) - 48;
    }

    if ((leftQ + rightQ) % 2 === 1) return true;

    return leftSum - rightSum !== ((rightQ - leftQ) / 2) * 9;
};

console.log(sumGame("5023")); // false
console.log(sumGame("25??")); // true