









// Optimized bit manipulation approach
const countAGSubsequences = (A) => {
 const MOD = 1000000007;
        const CODE_A = 65;  // 'A'.charCodeAt(0)
        const CODE_G = 71;  // 'G'.charCodeAt(0)
        let countA = 0;
        let result = 0;

        for (let i = 0; i < A.length; i++) {
            const c = A.charCodeAt(i);
            if (c === CODE_A) {
                countA++;
            } else if (c === CODE_G) {
                result = (result + countA) % MOD;
            }
        }
        return result;
    }
    