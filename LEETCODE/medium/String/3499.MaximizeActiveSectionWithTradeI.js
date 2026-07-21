/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function(s) {
    const n = s.length;
    let prevZero = 0;
    let currZero = 0;
    let totalOnes = 0;
    let best = 0;
    let i = 0;

    while (i < n) {
        if (s[i] === '0') {
            prevZero++;
            i++;
        } else {
            while (i < n && s[i] === '1') {
                totalOnes++;
                i++;
            }

            while (i < n && s[i] === '0') {
                currZero++;
                i++;
            }

            if (prevZero && currZero) {
                best = Math.max(best, prevZero + currZero);
            }

            prevZero = currZero;
            currZero = 0;
        }
    }

    return totalOnes + best;
};
console.log(maxActiveSectionsAfterTrade("110001111000011")); // Output: 10