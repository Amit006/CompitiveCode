
const GridIllumination = function (n, lamps, queries) {
    // Grid of illumination counts
    const board = Array.from({ length: n }, () => Array(n).fill(0));
    
    // Grid to track where lamps actually exist (to avoid duplicate counting and to support correct turn-off)
    const lampAt = Array.from({ length: n }, () => Array(n).fill(false));

    const inBounds = (x, y) => x >= 0 && x < n && y >= 0 && y < n;

    const lightUp = (x, y) => {
        // Row and column
        for (let i = 0; i < n; i++) {
            board[x][i] += 1; // Row
            board[i][y] += 1; // Column
        }
        // Diagonals
        for (let d = -n; d <= n; d++) {
            const x1 = x + d, y1 = y + d; // main diag
            const x2 = x + d, y2 = y - d; // anti diag
            if (inBounds(x1, y1)) board[x1][y1] += 1;
            if (inBounds(x2, y2)) board[x2][y2] += 1;
        }
    };

    const turnOffLamp = (x, y) => {
        // Row and column
        for (let i = 0; i < n; i++) {
            if (board[x][i] > 0) board[x][i] -= 1; // Row
            if (board[i][y] > 0) board[i][y] -= 1; // Column
        }
        // Diagonals
        for (let d = -n; d <= n; d++) {
            const x1 = x + d, y1 = y + d; // main diag
            const x2 = x + d, y2 = y - d; // anti diag
            if (inBounds(x1, y1) && board[x1][y1] > 0) board[x1][y1] -= 1;
            if (inBounds(x2, y2) && board[x2][y2] > 0) board[x2][y2] -= 1;
        }
    };

    // Initialize lamps (avoid duplicate positions)
    for (const [x, y] of lamps) {
        if (!inBounds(x, y)) continue;
        if (lampAt[x][y]) continue; // already placed, skip duplicates
        lampAt[x][y] = true;
        lightUp(x, y);
    }

    const result = [];

    for (const [r, c] of queries) {
        // Check if illuminated
        result.push(board[r][c] > 0 ? 1 : 0);

        // Turn off any lamps in the 3x3 neighborhood centered at (r, c)
        for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
                const x = r + dx, y = c + dy;
                if (!inBounds(x, y)) continue;
                if (!lampAt[x][y]) continue;
                // Turn off this lamp and update illumination grid
                lampAt[x][y] = false;
                turnOffLamp(x, y);
            }
        }
    }

    return result;
};

// Tests (grid approach)
console.log(GridIllumination(5, [[0,0],[4,4]], [[1,1],[1,1]])); // Expected [1,1]
console.log(GridIllumination(5, [[0,0],[0,4]], [[0,4],[0,1],[1,4]])); // Expected [1,1,0]
console.log(GridIllumination(5, [[0,0],[1,0]], [[1,1],[1,0]])); // Expected [1,1]
console.log(GridIllumination(5, [[0,0],[4,4]], [[1,1],[1,1]])); // Expected [1,1]
