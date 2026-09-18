/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfSets = function (n, k) {
    const MOD = 1000000007n;
    const N = BigInt(n + k - 1); // top of C(n+k-1, 2k)
    const R = BigInt(2 * k);

    // Loop 1: precompute factorials 0! .. (n+k-1)! mod MOD
    const maxN = n + k;
    const fact = new Array(maxN).fill(1n);
    for (let i = 1; i < maxN; i++) {
        fact[i] = (fact[i - 1] * BigInt(i)) % MOD;
    }

    // Loop 2: fast modular exponentiation, base^exp mod MOD
    function power(base, exp, mod) {
        let result = 1n;
        base = base % mod;
        while (exp > 0n) {
            if (exp & 1n) result = (result * base) % mod;
            base = (base * base) % mod;
            exp >>= 1n;
        }
        return result;
    }

    function modInverse(x) {
        return power(x, MOD - 2n, MOD); // Fermat's little theorem
    }

    function nCr(nn, rr) {
        if (rr < 0n || rr > nn) return 0n;
        const numerator = fact[Number(nn)];
        const denom = (fact[Number(rr)] * fact[Number(nn - rr)]) % MOD;
        return (numerator * modInverse(denom)) % MOD;
    }

    return Number(nCr(N, R));
};
console.log(numberOfSets(4, 2)); // Output: 5
console.log(numberOfSets(3, 1)); // Output: 3