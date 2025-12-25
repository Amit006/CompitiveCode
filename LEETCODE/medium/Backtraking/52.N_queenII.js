function totalNQueens(n) {
    const board = Array.from({ length: n }, () => new Array(n).fill(0));
    let count = 0;

    const isSafe = (row, column) => {

        // check upper column
        for (let i = row; i >= 0; i--) {
            if (board[i][column] === 1) {
                return false;
            }
        };

        // check left diagonal
        for (let r = row, c = column; r >= 0 && c  >= 0; r--, c--) {
            if (board[r][c] === 1){
                 return false;
            }
        };

        // check right diagonal
        for (let r = row, c = column; r >= 0 && c < n; r--, c++) {
            if (board[r][c] === 1){ 
                return false;
            }
        };


        return true;
    };




    const backtrack = (row) => {
        if (row === n) {
            count++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 1;
                backtrack(row + 1);
                board[row][col] = 0;
            }
        }
    };

    backtrack(0);

    return count;
};

// console.log(totalNQueens(4));


// using sets for optimization
function totalNQueensOptimized(n) {
    let count = 0;
    const cols = new Set();
    const diag1 = new Set();
    const diag2 = new Set();

    const backtrack = (row) => {
        if (row === n) {
            count++;
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) {
                continue;
            }

            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);

            backtrack(row + 1);

            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    };
    backtrack(0);

    return count;
}

// console.log(totalNQueensOptimized(4));


// TODO: bitmasking approach
function totalNQueensBitmask(n) {
    let count = 0;

    const backtrack = (row, cols, diag1, diag2) => {
        if (row === n) {
            count++;
            return;
        }

        for (let col = 0; col < n; col++) {
            const d1 = row - col + n - 1;
            const d2 = row + col;
            if ((cols & (1 << col)) || (diag1 & (1 << d1)) || (diag2 & (1 << d2))) {
                continue;
            }

            cols |= (1 << col);
            diag1 |= (1 << d1);
            diag2 |= (1 << d2);

            backtrack(row + 1, cols, diag1, diag2);

            cols &= ~(1 << col);
            diag1 &= ~(1 << d1);
            diag2 &= ~(1 << d2);
        }
    };
    backtrack(0, 0, 0, 0);

    return count;
}

console.log(totalNQueensBitmask(4));