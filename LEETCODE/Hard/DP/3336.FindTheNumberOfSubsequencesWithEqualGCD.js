/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequencePairCount = function(nums) {
    const MOD = 1000000007;
    const SIZE = 201;

    const gcdTwo = (a, b) => {
        while (b !== 0) [a, b] = [b, a % b];
        return a;
    };

    // dp[g1][g2] flattened: dp[g1 * SIZE + g2] = number of ways
    let dp = new Float64Array(SIZE * SIZE); // plain numbers, mod keeps them small
    dp[0] = 1; // (g1=0, g2=0): before processing anything, empty/empty, 1 way

    // precompute gcd table for speed: gcdWith[g][v] = gcd(g, v) for g in [0,200], v = current nums[i]
    for (let idx = 0; idx < nums.length; idx++) {
        const v = nums[idx];
        const next = new Float64Array(SIZE * SIZE);

        for (let g1 = 0; g1 < SIZE; g1++) {
            for (let g2 = 0; g2 < SIZE; g2++) {
                const ways = dp[g1 * SIZE + g2];
                if (ways === 0) continue;

                // skip
                next[g1 * SIZE + g2] = (next[g1 * SIZE + g2] + ways) % MOD;

                // add to A
                const ng1 = gcdTwo(g1, v);
                next[ng1 * SIZE + g2] = (next[ng1 * SIZE + g2] + ways) % MOD;

                // add to B
                const ng2 = gcdTwo(g2, v);
                next[g1 * SIZE + ng2] = (next[g1 * SIZE + ng2] + ways) % MOD;
            }
        }

        dp = next;
    }

    let total = 0;
    for (let g = 1; g < SIZE; g++) {
        total = (total + dp[g * SIZE + g]) % MOD;
    }
    return total;
};

console.log(subsequencePairCount([2, 3, 4, 6])); // Output: 5
console.log(subsequencePairCount([1, 2, 3])); // Output: 4
console.log(subsequencePairCount([1, 1, 1])); // Output: 4

// recursion with memoization
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequencePairCount = function(nums) {
    const MOD = 1000000007n;
    const n = nums.length;

    const gcdTwo = (a, b) => b === 0 ? a : gcdTwo(b, a % b);

    // memo[i] is a Map keyed by "g1,g2" -> count
    const memo = Array.from({ length: n }, () => new Map());

    function solve(i, g1, g2) {
        if (i === n) {
            return (g1 !== 0 && g1 === g2) ? 1n : 0n;
        }

        const key = g1 * 201 + g2;
        const cached = memo[i].get(key);
        if (cached !== undefined) return cached;

        const skip = solve(i + 1, g1, g2);
        const toA  = solve(i + 1, gcdTwo(g1, nums[i]), g2);
        const toB  = solve(i + 1, g1, gcdTwo(g2, nums[i]));

        const result = (skip + toA + toB) % MOD;
        memo[i].set(key, result);
        return result;
    }

    return Number(solve(0, 0, 0));
};

console.log(subsequencePairCount([2, 3, 4, 6])); // Output: 5
console.log(subsequencePairCount([1, 2, 3]));   // Output: 4
console.log(subsequencePairCount([1, 1, 1]));   // Output: 4