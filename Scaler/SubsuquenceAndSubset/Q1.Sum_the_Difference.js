

const oddEvenSubsequences = (arr) => {
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