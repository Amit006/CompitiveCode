/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var smallestPalindrome = function (s, k) {
    const freq = new Array(26).fill(0);
    for (const ch of s) freq[ch.charCodeAt(0) - 97]++;

    const half = new Array(26).fill(0);
    let middleChar = "";
    for (let i = 0; i < 26; i++) {
        if (freq[i] % 2 === 1) middleChar = String.fromCharCode(97 + i);
        half[i] = Math.floor(freq[i] / 2);
    }

    const m = half.reduce((a, b) => a + b, 0);

    // Multinomial coefficient of `counts`, capped: returns cap+1 the moment
    // the true value would exceed cap, so it never computes a huge number.
    function permCountCapped(counts, cap) {
        let total = 0;
        let result = 1;
        for (let i = 0; i < 26; i++) {
            const g = counts[i];
            if (g === 0) continue;
            const mTot = total + g;
            const r = Math.min(g, total); // C(mTot, g) == C(mTot, r)
            let cVal = 1;
            for (let x = 1; x <= r; x++) {
                cVal = (cVal * (mTot - r + x)) / x; // exact integer each step
                if (cVal > cap) return cap + 1;
            }
            result *= cVal;
            if (result > cap) return cap + 1;
            total = mTot;
        }
        return result;
    }

    if (permCountCapped(half, k) < k) return ""; // fewer than k arrangements exist

    const remaining = half.slice();
    let halfStr = "";
    let kk = k;

    for (let pos = 0; pos < m; pos++) {
        for (let i = 0; i < 26; i++) {
            if (remaining[i] === 0) continue;
            remaining[i]--;
            const v = permCountCapped(remaining, kk);
            if (v >= kk) {
                halfStr += String.fromCharCode(97 + i);
                break;
            } else {
                kk -= v;
                remaining[i]++;
            }
        }
    }

    return halfStr + middleChar + halfStr.split("").reverse().join("");
};
console.log(smallestPalindrome("aabb", 2)); // Output: "abba"