/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Helper: Check if there's any fresh orange left
    const hasFresh = () => {
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) return true;
            }
        }
        return false;
    };

    // If no fresh oranges initially
    if (!hasFresh()) return 0;

    let minutes = 0;
    const directions = [[-1,0], [1,0], [0,-1], [0,1]];

    while (true) {
        let rottedThisMinute = false;

        // Step 1: Mark newly rotted oranges as -1 (to avoid affecting same-minute propagation)
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 2) {
                    for (const [dr, dc] of directions) {
                        const nr = r + dr;
                        const nc = c + dc;
                        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                            grid[nr][nc] = -1; // mark for rotting
                            rottedThisMinute = true;
                        }
                    }
                }
            }
        }

        // If no new oranges rotted, break
        if (!rottedThisMinute) break;

        // Step 2: Convert all -1 to 2 (finalize this minute's rotting)
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === -1) {
                    grid[r][c] = 2;
                }
            }
        }

        minutes++;
    }

    // If any fresh orange remains, return -1
    return hasFresh() ? -1 : minutes;
};

// console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]])); // Output: 4
console.log(orangesRotting([[1,1,2],[0,1,1],[1,1,0]])); // Output: 4