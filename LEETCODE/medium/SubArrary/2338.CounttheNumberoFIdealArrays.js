/**
 * @param {number} n
 * @param {number} maxValue
 * @return {number}
 */
var idealArrays = function (n, maxValue) {
    let count = 0;

    for (let i = 1; i <= maxValue; i++) {
        for (let j = 1; j<= maxValue; j++) {
            console.log("i: ", i, "j: ", j, " divisable: ", j % i === 0);
            if (j % i === 0) count++;
        }
    }
    return count;
};


console.log(idealArrays(2, 5)); // Output: 3 // it should be 10 ?
// console.log(idealArrays(5, 3)); // Output: 7