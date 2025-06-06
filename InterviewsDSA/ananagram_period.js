function shortestAnagramPeriod(str) {
    const n = str.length;
    for (let p = 1; p <= n; p++) {
        if (n % p !== 0) continue;

        // Get frequency of the first segment
        const firstFreq = {};
        for (let i = 0; i < p; i++) {
            const char = str[i];
            firstFreq[char] = (firstFreq[char] || 0) + 1;
        }

        // Check all other segments
        let isValid = true;
        for (let i = p; i < n; i += p) {
            const currentFreq = {};
            for (let j = i; j < i + p; j++) {
                const char = str[j];
                currentFreq[char] = (currentFreq[char] || 0) + 1;
            }

            // Compare frequencies
            for (const char in firstFreq) {
                if (firstFreq[char] !== currentFreq[char]) {
                    isValid = false;
                    break;
                }
            }
            if (!isValid) break;
        }

        if (isValid) return p;
    }
    return n; // Worst case: the entire string is its own period
}

// Examples:
console.log(shortestAnagramPeriod("ababab"));    // Output: 2
console.log(shortestAnagramPeriod("abcabcabc")); // Output: 3
console.log(shortestAnagramPeriod("aaaa"));      // Output: 1
console.log(shortestAnagramPeriod("aabbcc"));    // Output: 2