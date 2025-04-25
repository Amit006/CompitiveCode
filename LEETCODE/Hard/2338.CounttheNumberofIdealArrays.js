
/**
 * @param {number} n
 * @param {number} maxValue
 * @return {number}
 */
var idealArrays = function (n, maxValue) {
    const MOD = 10 ** 9 + 7;Q
    const maxK = maxValue;
    const spf = new Array(maxK + 1).fill(0);
    for (let i = 2; i <= maxK; i++) {
        if (spf[i] === 0) {
            spf[i] = i;
            for (let j = i * i; j <= maxK; j += i) {
                if (spf[j] === 0) spf[j] = i;
            }
        }
    }
    let max_e_plus_n = 0;
    for (let v = 1; v <= maxK; v++) {
        let x = v;
        const factors = {};
        while (x > 1) {
            const p = spf[x];
            let cnt = 0;
            while (x % p === 0) {
                cnt++;
                x /= p;
            }
            factors[p] = cnt;
        }
        const exponents = Object.values(factors);
        if (exponents.length === 0) {
            max_e_plus_n = Math.max(max_e_plus_n, n);
        } else {
            const currentMax = Math.max(...exponents) + n;
            max_e_plus_n = Math.max(max_e_plus_n, currentMax);
        }
    }
    const fact = new Array(max_e_plus_n + 1).fill(1);
    for (let i = 2; i <= max_e_plus_n; i++) {
        fact[i] = (fact[i - 1] * i) % MOD;
    }
    const invFact = new Array(max_e_plus_n + 1).fill(1);
    invFact[max_e_plus_n] = modInverse(fact[max_e_plus_n], MOD);
    for (let i = max_e_plus_n - 1; i >= 0; i--) {
        invFact[i] = (invFact[i + 1] * (i + 1)) % MOD;
    }
    function comb(nComb, k) {
        if (nComb < k || k < 0) return 0;
        return (fact[nComb] * invFact[k] % MOD) * invFact[nComb - k] % MOD;
    }
    let result = 0;
    for (let v = 1; v <= maxValue; v++) {
        let x = v;
        const factors = {};
        while (x > 1) {
            const p = spf[x];
            let cnt = 0;
            while (x % p === 0) {
                cnt++;
                x /= p;
            }
            factors[p] = cnt;
        }
        let product = 1;
        for (const e of Object.values(factors)) {
            product = (product * comb(e + n - 1, n - 1)) % MOD;
        }
        result = (result + product) % MOD;
    }
    return result;
}

function modInverse(a, mod) {
    let [oldM, m] = [mod, a];
    let [x0, x1] = [0, 1];
    if (m === 1) return 0;
    while (a > 1) {
        const q = Math.floor(a / mod);
        [a, mod] = [mod, a % mod];
        [x0, x1] = [x1 - q * x0, x0];
    }
    return x1 < 0 ? x1 + oldM : x1;
};


/*

2338. Count the Number of Ideal Arrays
Topics
Companies
Hint
You are given two integers n and maxValue, which are used to describe an ideal array.

A 0-indexed integer array arr of length n is considered ideal if the following conditions hold:

Every arr[i] is a value from 1 to maxValue, for 0 <= i < n.
Every arr[i] is divisible by arr[i - 1], for 0 < i < n.
Return the number of distinct ideal arrays of length n. Since the answer may be very large, return it modulo 109 + 7.

 

Example 1:

Input: n = 2, maxValue = 5
Output: 10
Explanation: The following are the possible ideal arrays:
- Arrays starting with the value 1 (5 arrays): [1,1], [1,2], [1,3], [1,4], [1,5]
- Arrays starting with the value 2 (2 arrays): [2,2], [2,4]
- Arrays starting with the value 3 (1 array): [3,3]
- Arrays starting with the value 4 (1 array): [4,4]
- Arrays starting with the value 5 (1 array): [5,5]
There are a total of 5 + 2 + 1 + 1 + 1 = 10 distinct ideal arrays.
Example 2:

Input: n = 5, maxValue = 3
Output: 11
Explanation: The following are the possible ideal arrays:
- Arrays starting with the value 1 (9 arrays): 
   - With no other distinct values (1 array): [1,1,1,1,1] 
   - With 2nd distinct value 2 (4 arrays): [1,1,1,1,2], [1,1,1,2,2], [1,1,2,2,2], [1,2,2,2,2]
   - With 2nd distinct value 3 (4 arrays): [1,1,1,1,3], [1,1,1,3,3], [1,1,3,3,3], [1,3,3,3,3]
- Arrays starting with the value 2 (1 array): [2,2,2,2,2]
- Arrays starting with the value 3 (1 array): [3,3,3,3,3]
There are a total of 9 + 1 + 1 = 11 distinct ideal arrays.
 

Constraints:

2 <= n <= 104
1 <= maxValue <= 104

Seen this question in a real interview before?
1/5
Yes
No
Accepted
64.6K
Submissions
112K
Acceptance Rate
57.7%
Topics
Companies
Hint 1
Hint 2
Hint 3
Similar Questions
Discussion (197)

Choose a type



Copyright ©️ 2025 LeetCode All rights reserved

*/