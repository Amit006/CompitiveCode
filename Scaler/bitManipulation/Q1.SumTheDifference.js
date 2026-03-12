const solve = (A) => {

    const n = A.length;
    const MOD = 1e9 + 7;
    const set= new Set();

    let sum = 0;

    const backtrack = (index, current) => {
            if (!set.has(current.join(','))  && current.length > 1) {
                sum = (sum + (Math.max(...current) - Math.min(...current))) % MOD;
                set.add(current.join(','));
            }

            for (let i = index; i < n; i++) {
                current.push(A[i]);
                backtrack(i + 1, current);
                current.pop();
            }

            return sum;
    }

    sum = backtrack(0, []);

    return sum % MOD;
}

// console.log(solve([1, 2, 3])); // Output: 6
// console.log(solve([4, 1, 3])); // Output: 9


// Optimize Solution using Bit Manipulation
const solveOptimized = (A) => {
    const n = A.length;
    const MOD = 1e9 + 7;
    let sum = 0;


    for (let i = 1; i < (1 << n); i++) {
        let subset = [];
        for(let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                subset.push(A[j]);
            }
        }
        if (subset.length > 1) {
            sum = (sum + (Math.max(...subset) - Math.min(...subset))) % MOD;
        }
    }

    return sum % MOD;
}
// Example usage with small arrays:
// console.log(solveOptimized([1, 2, 3])); // 6
// console.log(solveOptimized([4, 1, 3])); // 9


function solveOptimizedV2(arr) {
    const MOD = 1e9 + 7;
    arr.sort((a, b) => a - b);
    const n = arr.length;

    // Precompute powers of 2 modulo MOD
    const pow2 = new Array(n + 1).fill(1);
    for (let i = 1; i <= n; i++) {
        pow2[i] = (pow2[i - 1] * 2) % MOD;
    }

    let result = 0;
    for (let i = 0; i < n; i++) {
        const maxContrib = pow2[i];           // times arr[i] is max
        const minContrib = pow2[n - 1 - i];   // times arr[i] is min
        result = (result + arr[i] * (maxContrib - minContrib)) % MOD;
    }

    // Ensure non-negative result
    if (result < 0) result += MOD;
    return result;
}

// Example usage:
console.log(solveOptimizedV2([2, 7, 6])); // Output: 15