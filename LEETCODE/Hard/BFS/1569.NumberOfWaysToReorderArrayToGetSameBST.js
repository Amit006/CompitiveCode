/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function(nums) {
    const MOD = 1000000007;
    const n = nums.length;

    // 1. Precompute Combinations using standard Numbers (faster than BigInt)
    const comb = Array.from({ length: n + 1 }, () => new Int32Array(n + 1));
    for (let i = 0; i <= n; i++) {
        comb[i][0] = 1;
        for (let j = 1; j <= i; j++) {
            comb[i][j] = (comb[i - 1][j - 1] + comb[i - 1][j]) % MOD;
        }
    }

    // Allocate a single reusable buffer array to avoid GC allocations
    const buffer = new Int32Array(n);

    // 2. Optimized Divide & Conquer using In-place Array Indices
    // [start, end) defines the current subarray window in `nums`
    const count = (start, end) => {
        const length = end - start;
        if (length <= 2) return 1n;

        const root = nums[start];
        
        // Pointers to place elements into the temporary buffer
        let leftIdx = start;
        let rightIdx = end - 1;

        // Partition elements into the buffer without making new arrays
        for (let i = start + 1; i < end; i++) {
            const val = nums[i];
            if (val < root) {
                buffer[leftIdx++] = val;
            } else {
                buffer[rightIdx--] = val;
            }
        }

        // Copy partitioned items back into nums to isolate the subproblems
        // Elements from start to leftIdx are left-child nodes
        // Elements from leftIdx + 1 to end are right-child nodes
        for (let i = start; i < leftIdx; i++) {
            nums[i] = buffer[i];
        }
        // Right elements were filled backwards, so flip them cleanly back
        let src = end - 1;
        for (let i = leftIdx + 1; i < end; i++) {
            nums[i] = buffer[src--];
        }

        const L = leftIdx - start;
        const R = end - (leftIdx + 1);

        const leftWays = count(start, leftIdx);
        const rightWays = count(leftIdx + 1, end);
        const currentComb = BigInt(comb[L + R][L]);

        // Process final multiplication using BigInt to cleanly prevent overflow
        return (currentComb * leftWays % BigInt(MOD) * rightWays) % BigInt(MOD);
    };

    const totalWays = count(0, n);
    // Subtract 1 because the problem asks for *additional* ways
    return Number((totalWays - 1n + BigInt(MOD)) % BigInt(MOD));
};

const nums = [3, 4, 5, 1, 2];
console.log(numOfWays(nums)); // Output: 5