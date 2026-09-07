/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
  const MOD = 1e9 + 7;
    let totalCount = 1; // Base case: represents the empty string ""

    // 256 covers all standard ASCII characters (both uppercase and lowercase)
    const lastContribution = new Int32Array(256);

    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        const prevCount = totalCount;
        
        // 1. Blindly double the count
        totalCount = (totalCount * 2) % MOD;
        
        // 2. Subtract the duplicates if this character has been seen before
        const duplicateContribution = lastContribution[charCode];
        if (duplicateContribution > 0) {
            totalCount = (totalCount - duplicateContribution + MOD) % MOD;
        }
        
        // 3. Update this character's contribution to equal the total count BEFORE this step
        lastContribution[charCode] = prevCount;
    }

    // 4. Subtract 1 to remove the empty string "" safely
    return (totalCount - 1 + MOD) % MOD;
};

console.log(distinctSubseqII("ABCDEAB"));