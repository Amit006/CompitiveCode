

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


// faster then previous solution
// This solution uses a Set to store unique elements and checks for complements
const pairsWithGivenXor2 = (arr, n, k) => {
      const uniqueSet = new Set(A);
        let count = 0;
        for (let i of uniqueSet) {
            const complement = B ^ i;
            if (uniqueSet.has(complement)) count++;
        }
        return count / 2;
    }
console.log(pairsWithGivenXor2(A, A.length, B)); // Output: 2
console.log(pairsWithGivenXor2(A1, A1.length, B1)); // Output: 0
