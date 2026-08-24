/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVIII = function(stones) {
    const n = stones.length;

    for (let i = 1; i < n; i++) {
        stones[i] += stones[i - 1];
    }

    let best = stones[n - 1];

    for (let i = n - 2; i >= 1; i--) {
        best = Math.max(
            best,
            stones[i] - best
        );
    }

    return best;
};

console.log(stoneGameVIII([-1, 2, -3, 4])); // Output: 5
console.log(stoneGameVIII([-7, 1, 3, 10])); // Output: 10