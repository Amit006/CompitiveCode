/*
Approach :- 
1) can we get all the pairs respect to value k (constant time npr - 20) 
2) then we see  if it available in string O(20) or less / alternative we can find all the pairs of s and then mark one  by one  from (k - NPR - set- if we foundd we will remove), al last we will check if setlength is zero or not .


*/

const hasAllCodes = function (s, k) {
    const totalCodes = 1 << k;

    // Generate all possible binary codes of length k with 0 and 1
    const codesSet = new Set();
    for (let i = 0; i < totalCodes; i++) {
        const code = i.toString(2).padStart(k, "0"); // Convert to binary and pad with zeros
        codesSet.add(code);
    }

    // Check for each code if it exists in the string
    for (const code of codesSet) {
        if (!s.includes(code)) {
            return false; // If any code is missing, return false
        }
    }

    return true; // All codes are present
};

console.log(hasAllCodes("00110110", 3)); // true
// console.log(hasAllCodes("0110", 1));
// console.log(hasAllCodes("0110", 2)); // false

// Approach 2
const hasAllCodes2 = function (s, k) {
    const totalCodes = 1 << k;
    const codesSet = new Set();

    for (let i = 0; i <= s.length - k; i++) {
        const code = s.substring(i, i + k);
        codesSet.add(code);

        // Early exit: if we found them all, we can stop!
        if (codesSet.size === totalCodes) return true;
    }
    return codesSet.size === totalCodes; // Check if we have all possible codes
};

console.log(hasAllCodes2("00110110", 3)); // true
// console.log(hasAllCodes2("0110", 1));
// console.log(hasAllCodes2("0110", 2)); // false

// Approach 3 - Optimized with bit manipulation
const hasAllCodes3 = function (s, k) {
    const totalCodes = 1 << k;
    const seen = new Uint8Array(totalCodes); // More memory efficient than a Set
    let count = 0;
    let hash = 0;
    const mask = totalCodes - 1; // All 1s for k bits

    for (let i = 0; i < s.length; i++) {
        // Roll the hash: Shift left, add new bit, mask to k bits
        hash = ((hash << 1) & mask) | (s[i] - "0");

        // Only start counting once we have a full window of k bits
        if (i >= k - 1) {
            if (seen[hash] === 0) {
                seen[hash] = 1;
                count++;
                if (count === totalCodes) return true;
            }
        }
    }
    return false;
};

console.log(hasAllCodes3("00110110", 3)); // true
// console.log(hasAllCodes3("0110", 1));
// console.log(hasAllCodes3("0110", 2)); // false
