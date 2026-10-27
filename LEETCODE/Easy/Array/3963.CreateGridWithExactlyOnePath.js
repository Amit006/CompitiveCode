/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function(m, n) {
    const obstacleRow = '#'.repeat(n - 1) + '.';
    const grid = ['.'.repeat(n)];
    for (let i = 1; i < m; i++) {
        grid.push(obstacleRow);
    }
    return grid;
};

console.log(createGrid(3, 4)); // Output: [ '....', '###.', '###.' ]