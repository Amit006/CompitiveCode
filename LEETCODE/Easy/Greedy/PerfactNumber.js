var checkPerfectNumber = function (num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }
  return sum == num;
};

// console.log(checkPerfectNumber(28)); // true
// console.log(checkPerfectNumber(6)); // true
// console.log(checkPerfectNumber(2016)); // true

// O(√n)
const checkPerfectNumber_v2 = function (num) {
  if (num <= 1) {
    return false;
  }
  let sum = 1;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (i * i !== num) {
        // Avoid adding the square root twice
        sum += num / i;
      }
    }
  }
  return sum === num;
};

// console.log(checkPerfectNumber_v2(28)); // true
// console.log(checkPerfectNumber_v2(6)); // true
// console.log(checkPerfectNumber_v2(2016)); // true

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

//O(1) - Math.pow(10,8) - 100000000
let perfectNumbers = [];
const generatePerfectNumbers = (n) => {
  perfectNumbers = []; // Reset the array for each call
  for (let p = 2; p < n; p++) {
    if (isPrime(p)) {
      const mersenne = Math.pow(2, p) - 1;
      if (isPrime(mersenne)) {
        const perfectNumber = Math.pow(2, p - 1) * mersenne;
        if (perfectNumber > n) break;
        perfectNumbers.push(perfectNumber);
      }
    }
  }
  return perfectNumbers;
};
console.log(generatePerfectNumbers(100000000)); // [6, 28, 496, 8128, 33550336]
const checkPerfectNumberUsingFormula = function (num) {
  if (num <= 0) {
    return false;
  }
  return [ 6, 28, 496, 8128, 33550336 ].includes(num);
};

console.log(checkPerfectNumberUsingFormula(28)); // true
console.log(checkPerfectNumberUsingFormula(2016)); // false
console.log(checkPerfectNumberUsingFormula(8128)); // true
