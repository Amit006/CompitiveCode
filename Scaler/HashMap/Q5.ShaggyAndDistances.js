

const shaggyAndDistances = (A) => {
    let minDistance = Infinity;
    const seen = {};

    for (let i = 0; i < A.length; i++) {
        if (A[i] in seen) {
            const distance = i - seen[A[i]];
            minDistance = Math.min(minDistance, distance);
        }
        seen[A[i]] = i;
    }

    return minDistance === Infinity ? -1 : minDistance;
}


console.log(shaggyAndDistances([1, 2, 3, 4, 5, 1])); // Output: 5 (distance between first and last occurrence of 1)
console.log(shaggyAndDistances([1, 2, 3, 4, 5])); // Output: -1 (no repeating element)
console.log(shaggyAndDistances([1, 2, 3, 4, 5, 2])); // Output: 5 (distance between first and last occurrence of 2)