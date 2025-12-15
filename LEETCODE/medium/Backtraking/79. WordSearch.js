var wordSearch = function (board, word) {
    const rows = board.length;
    if (rows === 0) return false;
    const cols = board[0].length;
    if (word.length === 0) return true;

    const dfs = (r, c, k) => {
        if (k === word.length) return true; // matched all characters

        // bounds and current char check
        if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[k]) {
            return false;
        }

        const ch = board[r][c];
        board[r][c] = '#'; // mark visited

        const found = dfs(r - 1, c, k + 1) || // up
                      dfs(r + 1, c, k + 1) || // down
                      dfs(r, c - 1, k + 1) || // left
                      dfs(r, c + 1, k + 1);   // right

        board[r][c] = ch; // restore on backtrack
        return found;
    };

    // GO THROUGH EACH CELL IN THE GRID
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
};

const input = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
const word = "ABCCED";

// console.log(wordSearch(input, word));



// Optimize version
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var wordCountOptimized = function (board, word) {
    const m = board.length;
    const n = board[0].length;
    
    // Early exit if board is empty or word is longer than total cells
    if (m === 0 || n === 0 || word.length > m * n) return false;
    
    // Optimization 1: Count character frequencies
    const boardCount = new Map();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const char = board[i][j];
            boardCount.set(char, (boardCount.get(char) || 0) + 1);
        }
    }
    
    // Optimization 2: Check if board has all characters needed
    const wordCount = new Map();
    for (const char of word) {
        wordCount.set(char, (wordCount.get(char) || 0) + 1);
    }
    
    for (const [char, count] of wordCount) {
        if ((boardCount.get(char) || 0) < count) {
            return false;
        }
    }
    
    // Optimization 3: Start from less common character in word
    if (wordCount.get(word[0]) > wordCount.get(word[word.length - 1])) {
        word = word.split('').reverse().join('');
    }
    
    // Optimization 4: Pre-compute directions array
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    
    const dfs = (r, c, index) => {
        // Base case: found complete word
        if (index === word.length) return true;
        
        // Boundary and character check
        if (r < 0 || r >= m || c < 0 || c >= n || 
            board[r][c] !== word[index]) return false;
        
        // Mark cell as visited
        const temp = board[r][c];
        board[r][c] = '#';
        
        // Explore all directions
        for (const [dr, dc] of directions) {
            if (dfs(r + dr, c + dc, index + 1)) {
                board[r][c] = temp; // Restore before returning
                return true;
            }
        }
        
        // Restore cell and return false
        board[r][c] = temp;
        return false;
    };
    
    // Optimization 5: Start DFS from cells matching first character
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }
    
    return false;
};



// fastest version using bitmasking 
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * Word search using bitmask for visited cells (no string mutation)
 */

var exist = (board, word) => {
    if (!board.length || !word) return false;
    
    const m = board.length;
    const n = board[0].length;
    
    // Pre-check: length
    if (word.length > m * n) return false;
    
    // Frequency check
    const boardChars = new Set();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            boardChars.add(board[i][j]);
        }
    }
    
    for (const ch of word) {
        if (!boardChars.has(ch)) return false;
    }
    
    // Reverse if last character is rarer
    let firstCount = 0, lastCount = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) firstCount++;
            if (board[i][j] === word[word.length - 1]) lastCount++;
        }
    }
    
    const searchWord = lastCount < firstCount ? 
        word.split('').reverse().join('') : word;
    
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    function dfs(i, j, index, visitedMask) {
        // Check if visited using bitmask
        const bit = 1 << (i * n + j);
        if (visitedMask & bit) return false;
        
        // Character mismatch
        if (board[i][j] !== searchWord[index]) return false;
        
        // Word found
        if (index === searchWord.length - 1) return true;
        
        // Mark visited
        visitedMask |= bit;
        
        // Explore neighbors
        for (const [dx, dy] of directions) {
            const x = i + dx;
            const y = j + dy;
            if (x >= 0 && x < m && y >= 0 && y < n) {
                if (dfs(x, y, index + 1, visitedMask)) {
                    return true;
                }
            }
        }
        
        return false;
    }
    
    // Start from matching cells
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === searchWord[0]) {
                if (dfs(i, j, 0, 0)) return true;
            }
        }
    }
    
    return false;
};

