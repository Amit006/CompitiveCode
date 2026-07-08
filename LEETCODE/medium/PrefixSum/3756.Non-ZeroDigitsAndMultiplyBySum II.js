// Time:  O(n + m)
// Space: O(n)

// O(nMax): Precompute power mod values
const nMax = 1e5, mod = 1e9 + 7, bmod = BigInt(mod),
      powMod = new BigInt64Array(nMax + 1).fill(1n, 0, 1);
      
for (let i = 1; i <= nMax; i++)
    powMod[i] = (powMod[i - 1] * 10n) % bmod;

/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function(s, queries) {
    const n = s.length, m = queries.length,
          sumPfs = new Uint32Array(n + 1),
          concatPfs = new Uint32Array(n + 1),
          countPfs = new Uint32Array(n + 1);
          
    // O(n): Build prefix sum tables
    for (let i = 0; i < n; i++) {
        const x = s.charCodeAt(i) - 48; // Faster and safer than ~~s[i]
        sumPfs[i + 1] = sumPfs[i] + x;
        if (x) {
            concatPfs[i + 1] = (concatPfs[i] * 10 + x) % mod;
            countPfs[i + 1] = countPfs[i] + 1;
        } else {
            concatPfs[i + 1] = concatPfs[i];
            countPfs[i + 1] = countPfs[i];
        }
    }
    
    // Create a fresh array for the output to avoid mutating input references
    const ans = new Array(m);
    
    // O(m): Calculate query answers using prefix sum tables
    for (let q = 0; q < m; q++) {
        const [ql, qr] = queries[q],
              count = countPfs[qr + 1] - countPfs[ql],
              sum = sumPfs[qr + 1] - sumPfs[ql],
              concatR = concatPfs[qr + 1],
              concatL = Number((BigInt(concatPfs[ql]) * powMod[count]) % bmod),
              concat = (concatR - concatL + mod) % mod;
              
        ans[q] = (concat * sum) % mod;
    }
    
    return ans;
};

const s ="10203004";
const queries = [[0, 7], [0, 3], [4, 7]];
console.log(sumAndMultiply(s, queries)); // Output: [12340, 6, 4]
const s2 = "105";
const queries2 = [[0, 2], [0, 1], [1, 2]];
console.log(sumAndMultiply(s2, queries2 )); // Output: [90, 1, 25]