/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
// String conversion approach to count peaks and valleys in 3-digit windows
var totalWaviness = function (num1, num2) {
    let sum = 0;
     for (let i = num1; i <= num2; i++) {
        const s = i.toString();
        if (s.length < 3) continue; // Skip numbers that cannot form 3-digit windows
        for (let j = 1; j < s.length - 1; j++) {
            const a = s[j - 1], b = s[j], c = s[j + 1];
            if ((b > a && b > c) || (b < a && b < c)) {
                sum++;
            }
        }    
    }
    return sum;
};

const num1 = 100, num2 = 123;
console.log(totalWaviness(num1, num2)); // Output: 4 (101, 111, 121, 123)
console.log(totalWaviness(150, 200)); //   Output: 10 (151, 152, 153, 154, 155, 156, 157, 158, 159, 160)
console.log(totalWaviness(1, 99)); //     Output: 0 (No 3-digit windows)
console.log(totalWaviness(100, 199)); //  Output: 10 (101, 102, 103, 104, 105, 106, 107, 108, 109, 110  )




















 // Optimized version using a sliding window approach to count peaks and valleys in 3-digit windows
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function (num1, num2) {
    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        if (i < 100) continue; // Skip numbers that cannot form 3-digit windows

        let x = i;
        let c = x % 10;
        x = (x / 10) | 0;
        let b = x % 10;
        x = (x / 10) | 0;

        while (x > 0) {
            let a = x % 10;

            // Check for peak (a < b > c) or valley (a > b < c)
            if ((b > a && b > c) || (b < a && b < c)) {
                sum++;
            }

            // Slide window to the left
            c = b;
            b = a;
            x = (x / 10) | 0;
        }
    }
    return sum;
};


console.log(" -------------  optimized version ------------- ");
const num = 1, num3 = 123;
console.log(totalWaviness(num, num3)); // Output: 4 (101, 111, 121, 123)
console.log(totalWaviness(150, 200));
console.log(totalWaviness(1, 99));
console.log(totalWaviness(2828, 99868)); // Output: 124 (Many peaks and valleys in this range)
