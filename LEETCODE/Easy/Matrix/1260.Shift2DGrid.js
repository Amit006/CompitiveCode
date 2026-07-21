/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const total = m * n;
    // Calculate the effective number of shifts. 
    // If k is a multiple of total, the grid looks exactly the same.
    k = k % total;
    if (k === 0) return grid;
    // Pre-allocate the resulting 2D grid to avoid dynamic resizing overhead
    const result = Array.from({ length: m }, () => new Array(n));
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            // 1. Find the 1D index of the current cell in the output
            const outIdx = r * n + c;
            // 2. Map it backwards to find its original 1D index
            const inIdx = (outIdx - k + total) % total;
            // 3. Convert the original 1D index back to 2D coordinates
            const origR = Math.floor(inIdx / n);
            const origC = inIdx % n;
            // 4. Place the element in its new home
            result[r][c] = grid[origR][origC];
        }
    }
    return result;
};

console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 1)); // Output: [[9,1,2],[3,4,5],[6,7,8]]