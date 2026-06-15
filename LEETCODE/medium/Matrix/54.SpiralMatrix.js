/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return [];
    let result = [];

    // for (let row = 0; row < matrix.length; row++) {

    //     let c = matrix[0].length - row - 1,
    //         r = matrix.length - row - 1;

    //     // Horizontal
    //     for (let j = row; j <= c; j++) {
    //         result.push(matrix[row][j]);
    //     }

    //     // vartical 
    //     for (let x = row + 1; x <= r; x++) {
    //         result.push(matrix[x][c]);
    //     }

    //     //last row
    //     for (let l = c-1; l > row; l--) {
    //         result.push(matrix[r][l]);

    //     }

    //     // last to up 
    //     for (let k = r; k > row; k--) {
    //         result.push(matrix[k][row]);
    //     }
    // }

    let rows = matrix.length, cols = matrix[0].length,
        layers = Math.ceil(Math.min(rows, cols) / 2);

    for (let row = 0; row < layers; row++) {
        let c = cols - row - 1,
            r = rows - row - 1;

        // Horizontal (top)
        for (let j = row; j <= c; j++) {
            result.push(matrix[row][j]);
        }

        // Vertical (right)
        for (let x = row + 1; x <= r; x++) {
            result.push(matrix[x][c]);
        }

        // Bottom row — only if more than one row in this layer
        if (row < r) {
            for (let l = c - 1; l >= row; l--) {
                result.push(matrix[r][l]);
            }
        }

        // Left column — only if more than one column in this layer
        if (row < c) {
            for (let k = r - 1; k > row; k--) {
                result.push(matrix[k][row]);
            }
        }
    }
    return result;

};


console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // Output: [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])); // Output: [1,2,3,4,8,12,11,10,9,5,6,7]