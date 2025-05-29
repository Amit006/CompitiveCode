
/*
Q3. Valid Sudoku
Solved
feature icon
Using hints except Complete Solution is Penalty free now
Use Hint
Determine if a Sudoku is valid, according to: http://sudoku.com.au/TheRules.aspx

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.



The input corresponding to the above configuration :

["53..7....", "6..195...", ".98....6.", "8...6...3", "4..8.3..1", "7...2...6", ".6....28.", "...419..5", "....8..79"]
A partially filled sudoku which is valid.

Note:

A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.
Return 0 / 1 ( 0 for false, 1 for true ) for this problem



*/




//  415 ms
const isValidSudoku = (board) => {
  const n = 9;

  const rowSets = Array.from({ length: n }, () => new Set());
  const colSets = Array.from({ length: n }, () => new Set());
  const boxSets = Array.from({ length: n }, () => new Set()); // For 3x3 boxes

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const char = board[i][j];
      if (char !== ".") {
        // Check row
        if (rowSets[i].has(char)) return 0;
        rowSets[i].add(char);

        // Check column
        if (colSets[j].has(char)) return 0;
        colSets[j].add(char);

        // Check 3x3 sub-box
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (boxSets[boxIndex].has(char)) return 0;
        boxSets[boxIndex].add(char);
      }
    }
  }

  return 1;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", "6", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
); // Output: 1

console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", "6", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
); // Output: 0

//158 ms
// bit faster solution
const isValidSudoku2 = (board) => {
  const n = 9;

  // Check rows
  for (let i = 0; i < n; i++) {
    const rowMap = new Map();
    for (let j = 0; j < n; j++) {
      const char = board[i][j];
      if (char !== ".") {
        if (rowMap.has(char)) {
          return 0;
        }
        rowMap.set(char, true);
      }
    }
  }

  // Check columns
  for (let j = 0; j < n; j++) {
    const colMap = new Map();
    for (let i = 0; i < n; i++) {
      const char = board[i][j];
      if (char !== ".") {
        if (colMap.has(char)) {
          return 0;
        }
        colMap.set(char, true);
      }
    }
  }

  // Check sub-boxes
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const boxMap = new Map();
      for (let i = boxRow * 3; i < boxRow * 3 + 3; i++) {
        for (let j = boxCol * 3; j < boxCol * 3 + 3; j++) {
          const char = board[i][j];
          if (char !== ".") {
            if (boxMap.has(char)) {
              return 0;
            }
            boxMap.set(char, true);
          }
        }
      }
    }
  }

  return 1;
};
