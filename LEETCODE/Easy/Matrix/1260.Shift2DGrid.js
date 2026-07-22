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

// console.log(shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 1)); // Output: [[9,1,2],[3,4,5],[6,7,8]]

// Optimization: Instead of creating a new grid, we can modify the original grid in place if allowed. However, this would require careful handling to avoid overwriting values before they are moved. The current approach is clear and avoids potential pitfalls of in-place modification.
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const total = m * n;
    
    k %= total;
    if (k === 0) return grid;

    // 1. Flatten the 2D grid into a highly optimized 1D array profile
    const flat = new Array(total);
    let idx = 0;
    for (let i = 0; i < m; i++) {
        const row = grid[i];
        for (let j = 0; j < n; j++) {
            flat[idx++] = row[j];
        }
    }

    // 2. Pre-allocate the skeleton frame for the final answer
    const result = new Array(m);
    for (let i = 0; i < m; i++) {
        result[i] = new Array(n);
    }

    // 3. Shift and reconstruct without Math.floor or modulo lookups in the hot loop
    // Find where the virtual 1D array should start in our flat buffer
    let readIdx = (total - k) % total; 

    for (let i = 0; i < m; i++) {
        const targetRow = result[i];
        for (let j = 0; j < n; j++) {
            targetRow[j] = flat[readIdx++];
            if (readIdx === total) {
                readIdx = 0; // Seamless pointer wrap-around
            }
        }
    }

    return result;
};

console.log(shiftGrid([[1],[2],[3],[4],[7],[6],[5]], 23)); // Output: [[9,1,2],[3,4,5],[6,7,8]]