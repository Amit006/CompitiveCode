/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
    const set = new Set();

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === 0) continue;  // leading zero

        for (let j = 0; j < digits.length; j++) {
            if (j === i) continue;

            for (let k = 0; k < digits.length; k++) {
                if (k === i || k === j) continue;

                if (digits[k] % 2 !== 0) continue;

                const num =
                    digits[i] * 100 +
                    digits[j] * 10 +
                    digits[k];

                set.add(num);
            }
        }
    }

    return set.size;
};

console.log(totalNumbers([2, 1, 3, 0])); // Output: 6
console.log(totalNumbers([2, 2, 8, 8, 2])); // Output: 0