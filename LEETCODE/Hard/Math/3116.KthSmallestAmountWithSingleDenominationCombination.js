/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
/**
 * Helper function to find Greatest Common Divisor using BigInt
 */
const gcd = (a, b) => b === 0n ? a : gcd(b, a % b);

/**
 * Helper function to find Least Common Multiple using BigInt
 */
const lcm = (a, b) => (a * b) / gcd(a, b);

/**
 * Principle of Inclusion-Exclusion (PIE) to find unique counts up to X
 */
function countUniqueMultiples(X, coins, index = 0, currentLcm = 1n, countCoins = 0) {
    if (index === coins.length) {
        if (countCoins === 0) return 0n;
        
        // Odd number of coins -> Add, Even number of coins -> Subtract
        return countCoins % 2 === 1 ? X / currentLcm : -(X / currentLcm);
    }

    // Path 1: Exclude the current coin
    const excludeCount = countUniqueMultiples(X, coins, index + 1, currentLcm, countCoins);

    // Path 2: Include the current coin (safely update LCM)
    const newLcm = lcm(currentLcm, coins[index]);
    const includeCount = countUniqueMultiples(X, coins, index + 1, newLcm, countCoins + 1);

    return excludeCount + includeCount;
}

/**
 * Main function: LeetCode entry point style
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var findKthSmallest = function(coins, k) {
    // 1. Convert everything to BigInt for large constraints safety
    const bigintCoins = coins.map(c => BigInt(c)).sort((a, b) => (a < b ? -1 : 1));
    const targetK = BigInt(k);
    
    // 2. Set Binary Search Range
    let low = 1n;
    let high = bigintCoins[0] * targetK; // Smallest coin * k provides the definitive ceiling
    let ans = high;

    // 3. Binary Search Loop
    while (low <= high) {
        let mid = low + (high - low) / 2n; // Safe BigInt integer division
        
        let uniqueElementsCount = countUniqueMultiples(mid, bigintCoins);

        if (uniqueElementsCount >= targetK) {
            ans = mid;             // Potential answer found, save it
            high = mid - 1n;       // Try to find a smaller valid value
        } else {
            low = mid + 1n;        // Count is too small, look higher
        }
    }
    
    // Convert back to standard JavaScript number for the final return
    return Number(ans);
};


console.log(findKthSmallest([1, 2, 3], 4)); // Output: 4
console.log(findKthSmallest([2, 3, 5], 5)); // Output: 8