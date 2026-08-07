var smallestNumber = function(n, t) {

    while (true) {

        let x = n;
        let prod = 1;

        while (x > 0) {
            prod *= x % 10;
            x = Math.floor(x / 10);
        }

        if (prod % t === 0)
            return n;

        n++;
    }
};

console.log(smallestNumber(1, 1)); // Output: 1
console.log(smallestNumber(2, 3)); // Output: 3
console.log(smallestNumber(3, 5)); // Output: 5
console.log(smallestNumber(4, 6)); // Output: 6
console.log(smallestNumber(5, 7)); // Output: 7
console.log(smallestNumber(6, 8)); // Output: 8
console.log(smallestNumber(7, 9)); // Output: 9