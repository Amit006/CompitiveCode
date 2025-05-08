

const pairsWithGivenXor = (arr, n, k) => {
    const pairMap = new Map();
    let count = 0;
    for (let i = 0; i < n; i++) {
        const complement = arr[i] ^ k;
        if (pairMap.has(complement)) {
            count += pairMap.get(complement);
        }
        pairMap.set(arr[i], (pairMap.get(arr[i]) || 0) + 1);
    }
    return count;
}

// Input 1:

 let A = [5, 4, 10, 15, 7, 6]
 let B = 5
// Input 2:

let  A1 = [3, 6, 8, 10, 15, 50]
let  B1 = 5

console.log(pairsWithGivenXor(A, A.length, B)); // Output: 2
console.log(pairsWithGivenXor(A1, A1.length, B1)); // Output: 0