var stoneGame = function (piles) { 
    const n = piles.length; 
    const dp = [...piles]; 
    
    for (let len = 2; len <= n; len++) { 
        for (let i = 0; i + len - 1 < n; i++) { 
            const j = i + len - 1; 
            dp[i] = Math.max(piles[i] - dp[i + 1], piles[j] - dp[i]); 
        } 
    } 
    return dp[0] > 0;

};

console.log(stoneGame([5, 3, 4, 5])); // Output: true
console.log(stoneGame([3, 7, 2, 3])); // Output: true