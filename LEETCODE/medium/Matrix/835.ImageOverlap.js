/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    const n = img1.length;
    
    // Flat 1D packed coordinate encoding: r * 64 + c
    const p1 = [];
    const p2 = [];

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (img1[r][c] === 1) p1.push(r * 64 + c);
            if (img2[r][c] === 1) p2.push(r * 64 + c);
        }
    }

    // Direct lookup frequency table replacing Hash Maps (avoids string keys)
    const freq = new Uint16Array(4096);
    let maxOverlap = 0;

    for (let i = 0; i < p1.length; i++) {
        const v1 = p1[i];
        for (let j = 0; j < p2.length; j++) {
            const idx = v1 - p2[j] + 2048;
            freq[idx]++;
            if (freq[idx] > maxOverlap) {
                maxOverlap = freq[idx];
            }
        }
    }

    return maxOverlap;
};
console.log(largestOverlap([[1,1,0],[0,1,0],[0,1,0]], [[0,0,0],[0,1,1],[0,0,1]])) // 3  
console.log(largestOverlap([[1]], [[1]])) // 1