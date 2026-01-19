var sumForFourDivisors = function (nums) {
    let totalSum = 0;

    for (const num of nums) {
        let divisors = [];

        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                divisors.push(i);

                if (i !== num / i) {
                    divisors.push(num / i);
                }

                if (divisors.length > 4) {
                    break;
                }
            }

            if (divisors.length === 4) {
                totalSum += divisors.reduce((a, b) => a + b, 0);
            }
        }

        return totalSum;
    }
};


console.log(sumForFourDivisors([21, 4, 7])); // Output: 32
console.log(sumForFourDivisors([1, 2, 3, 4, 5])); // Output: 0  
