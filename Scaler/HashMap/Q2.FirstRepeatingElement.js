

const fastRepeatingElement = (A) => {
    const seen = new Map(); // Use a Map to store element and its first index
    let firstRepeating = -1;
    let minIndex = Infinity;

    for (let i = 0; i < A.length; i++) {
        const element = A[i];
        if (seen.has(element)) {
            if (seen.get(element) < minIndex) { // Compare with the *first* occurrence index
                minIndex = seen.get(element);
                firstRepeating = element;
            }
        } else {
            seen.set(element, i); // Store the *first* occurrence index
        }
    }
    return firstRepeating;
}


console.log(fastRepeatingElement([1, 2, 3, 4, 5, 1])); // Output: 1
console.log(fastRepeatingElement([1, 2, 3, 4, 5])); // Output: -1 (no repeating element)
console.log(fastRepeatingElement([1, 2, 3, 4, 5, 2])); // Output: 2