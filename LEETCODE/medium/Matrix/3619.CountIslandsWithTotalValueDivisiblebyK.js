/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */

const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
const countIslands = (grid, k) => {
    if (!grid.length || !grid[0].length) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    function checkGridValueDfs(row, col) {
        visited[row][col] = true;
        let sum = grid[row][col];

        for (const [dr, dc] of directions) {
            const nextRow = row + dr;
            const nextCol = col + dc;

            if (
                nextRow >= 0 && nextRow < rows &&
                nextCol >= 0 && nextCol < cols &&
                grid[nextRow][nextCol] > 0 &&
                !visited[nextRow][nextCol]
            ) {
                sum += checkGridValueDfs(nextRow, nextCol);
            }
        }

        return sum;
}

    let  count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] > 0 && !visited[i][j] && checkGridValueDfs(i, j) % k === 0) {
                count++;
            }
        }
    }

    return count;
};


console.log(countIslands([[0,2,1,0,0],[0,5,0,0,5],[0,0,1,0,0],[0,1,4,7,0],[0,2,0,0,8]], 5)); // Output: 2

// An Optimized Version of the above code is as follows:

const countIslandsOptimized = (grid, k) => {
    if (!grid.length || !grid[0].length) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 0) continue;

            let sum = grid[i][j];
            grid[i][j] = 0;               // mark visited
            const stack = [[i, j]];

            while (stack.length) {
                const [r, c] = stack.pop();

                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] > 0) {
                        sum += grid[nr][nc];  // take the value first...
                        grid[nr][nc] = 0;     // ...then mark visited
                        stack.push([nr, nc]);
                    }
                }
            }

            if (sum % k === 0) count++;
        }
    }

    return count;
};

console.log(countIslandsOptimized([[0,2,1,0,0],[0,5,0,0,5],[0,0,1,0,0],[0,1,4,7,0],[0,2,0,0,8]], 5)); // Output: 2