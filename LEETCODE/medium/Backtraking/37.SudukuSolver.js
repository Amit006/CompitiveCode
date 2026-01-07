const assert = require("assert");

// Optimized solver using hash sets for O(1) validity checks
const solveSudokuWithSets = function (board) {
    const n = 9;
    const rows = Array.from({ length: n }, () => new Set());
    const cols = Array.from({ length: n }, () => new Set());
    const boxes = Array.from({ length: n }, () => new Set());

    const boxIndex = (r, c) => Math.floor(r / 3) * 3 + Math.floor(c / 3);

    // Initialize sets from the initial board
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            const ch = board[r][c];
            if (ch !== ".") {
                rows[r].add(ch);
                cols[c].add(ch);
                boxes[boxIndex(r, c)].add(ch);
            }
        }
    }

    const solve = () => {
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (board[r][c] === ".") {
                    const b = boxIndex(r, c);
                    for (let d = 1; d <= 9; d++) {
                        const ch = String(d);
                        if (!rows[r].has(ch) && !cols[c].has(ch) && !boxes[b].has(ch)) {
                            // place
                            board[r][c] = ch;
                            rows[r].add(ch);
                            cols[c].add(ch);
                            boxes[b].add(ch);

                            if (solve()) return true;

                            // backtrack
                            board[r][c] = ".";
                            rows[r].delete(ch);
                            cols[c].delete(ch);
                            boxes[b].delete(ch);
                        }
                    }
                    return false; // no valid digit here
                }
            }
        }
        return true; // all cells filled
    };

    solve();
    return board;
};

// High-performance solver using bitmasks + MRV heuristic
const solveSudokuBitmask = function (board) {
    const n = 9;
    const FULL = 0x1FF; // 9 bits set
    const rows = new Array(n).fill(0);
    const cols = new Array(n).fill(0);
    const boxes = new Array(n).fill(0);
    const digitChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const boxIndex = (r, c) => ((r / 3) | 0) * 3 + ((c / 3) | 0);

    // Initialize masks from the initial board
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            const ch = board[r][c];
            if (ch !== ".") {
                const bit = 1 << (ch.charCodeAt(0) - 49); // '1' => bit 0
                rows[r] |= bit;
                cols[c] |= bit;
                boxes[boxIndex(r, c)] |= bit;
            }
        }
    }

    const solve = () => {
        // Find the empty cell with the minimum remaining values (MRV)
        let bestR = -1, bestC = -1;
        let bestCands = 0;
        let bestCount = 10; // more than max 9

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (board[r][c] === ".") {
                    const used = rows[r] | cols[c] | boxes[boxIndex(r, c)];
                    const cands = (~used) & FULL;
                    if (cands === 0) return false; // dead end

                    // count set bits in cands
                    let cnt = 0;
                    for (let t = cands; t; t &= t - 1) cnt++;

                    if (cnt < bestCount) {
                        bestCount = cnt;
                        bestR = r;
                        bestC = c;
                        bestCands = cands;
                    }
                }
            }
        }

        if (bestR === -1) return true; // solved (no empty cells)

        // Try candidates for the best cell
        let cands = bestCands;
        const b = boxIndex(bestR, bestC);
        while (cands) {
            const bit = cands & -cands; // lowest set bit
            cands ^= bit; // remove it
            const idx = (Math.log2(bit) | 0); // 0..8
            const ch = digitChars[idx];

            // place
            board[bestR][bestC] = ch;
            rows[bestR] |= bit;
            cols[bestC] |= bit;
            boxes[b] |= bit;

            if (solve()) return true;

            // backtrack
            board[bestR][bestC] = ".";
            rows[bestR] ^= bit;
            cols[bestC] ^= bit;
            boxes[b] ^= bit;
        }
        return false;
    };

    solve();
    return board;
};

const solveSudoku = function (board) {
    const isValid = (board, row, col, num) => {
       
        // Check if 'num' is not in the current row and column
        for (let x = 0; x < 9; x++) {
            if (board[row][x] === num || board[x][col] === num) {
                return false;
            }
        }

        // Check if 'num' is not in the current 3x3 sub-box
        const startRow = row - (row % 3);
        const startCol = col - (col % 3);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i + startRow][j + startCol] === num) {
                    return false;
                }
            }
        }

        return true;
    };

    const solve = (board) => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
        
                if (board[row][col] === ".") {
        
                    for (let d = 1; d <= 9; d++) {
                        const num = String(d);
                        if (isValid(board, row, col, num)) {
                            board[row][col] = num;

                            if (solve(board)) {
                                return true;
                            }

                            board[row][col] = "."; // Backtrack
                        }
                    }
                    return false; // Trigger backtracking
                }
            }
        }
        return true; // Solved
    };

    solve(board);

    return board;
};

const input = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const expected = [
    ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
    ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
    ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
    ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
    ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
    ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
    ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
    ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
    ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
];

const result1 = solveSudoku(input.map(row => row.slice()));
assert.deepStrictEqual(result1, expected);
console.log("Sudoku solved correctly (naive checks)");

const result2 = solveSudokuWithSets(input.map(row => row.slice()));
assert.deepStrictEqual(result2, expected);
console.log("Sudoku solved correctly (hash set optimized)");

const result3 = solveSudokuBitmask(input.map(row => row.slice()));
assert.deepStrictEqual(result3, expected);
console.log("Sudoku solved correctly (bitmask + MRV)");
