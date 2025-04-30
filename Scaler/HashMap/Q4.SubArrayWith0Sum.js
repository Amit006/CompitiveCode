

const SubArrayWith0Sum = (A) => {
    let prefixSum = 0;
    const seenSums = new Set([0]);

    for (const x of A) {
        prefixSum += x;
        if (seenSums.has(prefixSum)) {
            return 1;
        }
        seenSums.add(prefixSum);
    }
    return 0;
}


console.log(SubArrayWith0Sum([4, 2, -3, 1, 6])); // Output: 1 (subarray [2, -3, 1] has sum 0)
console.log(SubArrayWith0Sum([4, 2, 0, 1, 6])); // Output: 1 (subarray [2, 0] has sum 0)
console.log(SubArrayWith0Sum([1, 2, 3])); // Output: 0 (no subarray with sum 0)
console.log(SubArrayWith0Sum([1, 2, -3, 4])); // Output: 1 (subarray [2, -3] has sum 0)