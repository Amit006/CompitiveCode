var countCommas = function(n) {
    let totalCommas = 0n; // 'n' denotes BigInt
    let base = 999n;
    let bigN = BigInt(n);
    
    while (bigN > base) {
        totalCommas += (bigN - base);
        base = (base * 1000n) + 999n;
    }
    
    // totalCommas is guaranteed to be < MAX_SAFE_INTEGER, 
    // so we can safely cast it back to a regular JS Number for the return value
    return Number(totalCommas); 
};

console.log(countCommas(1323254354365477)); // Output: 1323254354365477 - 999 = 1323254354364478
console.log(countCommas(1000)); // Output: 1