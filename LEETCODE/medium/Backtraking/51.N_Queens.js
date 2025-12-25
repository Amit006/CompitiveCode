let solveNQueens = (n) => {
    const results = [];
    const board = Array.from({ length: n }, () => ".".repeat(n).split(""));

    function isSafe(row, col) {
        // check upper column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === "Q") return false;
        }

        // check upper left diagonal
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === "Q") return false;
        }

        //check upper right diagonal
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === "Q") return false;
        }

        return true;
    }

    const backtrack = (row) => {
        if (row === n) {
            const copy = board.map((r) => r.join(""));
            results.push(copy);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = "Q";
                backtrack(row + 1);
                board[row][col] = ".";
            }
        }
    };

    backtrack(0);

    return results;
};

// console.log(solveNQueens(4));

// const input = 4;

const solveNQueensOptimized = (n) => {
    const results = [];
    const board = Array.from({ length: n }, () => ".".repeat(n).split(""));
    const cols = new Set();
    const diag1 = new Set(); // r - c
    const diag2 = new Set(); // r + c

    const backtrack = (row) => {
        if (row === n) {
            const copy = board.map((r) => r.join(""));
            results.push(copy);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) {
                continue;
            }

            board[row][col] = "Q";
            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);

            backtrack(row + 1);
            board[row][col] = ".";
            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    };

    backtrack(0);
    return results;
};


// console.log(solveNQueensOptimized(4));
// Check boundaries and character match



const solveNQueensOptimizedV2 = (n) => {
    const results = [];
    const board = Array.from({ length: n }, () => ".".repeat(n).split(""));
    const cols = new Array(n).fill(false);
    const diag1 = new Array(2 * n).fill(false);

    const diag2 = new Array(2 * n).fill(false);

    const backtrack = (row) => {
        if (row === n) {
            const copy = board.map((r) => r.join(""));
            results.push(copy);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols[col] || diag1[row - col + n] || diag2[row + col]) {
                continue;
            }

            board[row][col] = "Q";
            cols[col] = true;
            diag1[row - col + n] = true;
            diag2[row + col] = true;

            backtrack(row + 1);
            board[row][col] = ".";
            cols[col] = false;
            diag1[row - col + n] = false;
            diag2[row + col] = false;
        }
    };

    backtrack(0);
    return results;
}



// console.log(solveNQueensOptimizedV2(4));

// using stack 
const solveNQueensOptimizedV3 = (n) => {
    const results = [];

    const row = new Array(n).fill('.');

    const stringify = (stack) => {
        return stack.map((i) => {
            row[i] = 'Q';
            const value = row.join('');
            row[i] = '.';
            return value;
        });
    };

    const isValidColumnForNextRow = (stack, col) => {
        let leftDiagCol = col - 1;
        let rightDiagCol = col + 1;

        for (let i = stack.length - 1; i >= 0; i--) {
            if (stack[i] === col || stack[i] === leftDiagCol-- || stack[i] === rightDiagCol++) {
                return false;
            }
        }

        return true;
    };
    
    const backtrack = (stack) => {
        if (stack.length === n) {
            results.push(stringify(stack));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValidColumnForNextRow(stack, col)) {
                stack.push(col);
                backtrack(stack);
                stack.pop();
            }
        }
    };

    backtrack([]);

    return results;
};

console.log(solveNQueensOptimizedV3(4));