/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    const MOD = 1000000007;
    const n = nums.length;

    const bit1 = new Array(n + 1).fill(0);
    const bit2 = new Array(n + 1).fill(0);
    const last = new Array(100001).fill(-1);

    const prefixSum = (k) => {
        let s1 = 0, s2 = 0;
        let index = k;

        while (index > 0) {
            s1 += bit1[index];
            s2 += bit2[index];
            index -= index & -index;
        }

        return k * s1 - s2;
    };

    const addBoundary = (index, delta) => {
        const weighted = delta * (index - 1);

        while (index <= n) {
            bit1[index] += delta;
            bit2[index] += weighted;
            index += index & -index;
        }
    };

    let totalDistinct = 0;
    let endingSquares = 0;
    let answer = 0;

    for (let i = 0; i < n; i++) {
        const value = nums[i];
        const p = last[value];

        const affectedSum =
            totalDistinct - prefixSum(p + 1);

        const length = i - p;

        endingSquares =
            (endingSquares + 2 * affectedSum + length) % MOD;

        answer = (answer + endingSquares) % MOD;

        addBoundary(p + 2, 1);
        addBoundary(i + 2, -1);

        totalDistinct += length;
        last[value] = i;
    }

    return answer;
};

console.log(sumCounts([1, 2, 1, 2, 3])); // Output: 35