var maxSideLength = function(mat, threshold) {
    const m = mat.length, n = mat[0].length;
    const width = n + 1;
    const P = new Int32Array((m + 1) * width);

    // Build Prefix Sum
    for (let i = 1; i <= m; i++) {
        const currentRow = i * width;
        const prevRow = (i - 1) * width;
        for (let j = 1; j <= n; j++) {
            P[currentRow + j] = mat[i - 1][j - 1] 
                                + P[prevRow + j] 
                                + P[currentRow + (j - 1)] 
                                - P[prevRow + (j - 1)];
        }
    }

    let maxLen = 0;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            let k = maxLen + 1;
            if (i >= k && j >= k) {
                // Inclusion-Exclusion on Flattened Array
                const sum = P[i * width + j] 
                          - P[(i - k) * width + j] 
                          - P[i * width + (j - k)] 
                          + P[(i - k) * width + (j - k)];

                if (sum <= threshold) maxLen++;
            }
        }
    }
    return maxLen;
};



console.log(maxSideLength([[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],
                           [1,1,3,2,4,3,2]], 4)); // Output: 2


console.log(maxSideLength([[2,2,2,2,2],
                           [2,2,2,2,2],
                           [2,2,2,2,2],
                           [2,2,2,2,2],
                           [2,2,2,2,2]], 1)); // Output: 0