/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @return {number}
 */
var maxBuilding = function(n, restrictions) {
    if (restrictions.length === 0) {
        return n - 1;
    }

    restrictions.sort((a, b) => a[0] - b[0]);

    let idx = 1, h = 0;

    for (let i = 0; i < restrictions.length; i++) {
        const x = restrictions[i][0];
        const y = restrictions[i][1];

        restrictions[i][1] = Math.min(y, x - idx + h);

        idx = x;
        h = restrictions[i][1];
    }

    for (let i = restrictions.length - 2; i >= 0; i--) {
        restrictions[i][1] = Math.min(
            restrictions[i][1],
            restrictions[i + 1][1] + restrictions[i + 1][0] - restrictions[i][0]
        );
    }

    let res = n - restrictions[restrictions.length - 1][0] + restrictions[restrictions.length - 1][1];

    idx = 1;
    h = 0;

    for (const [x, y] of restrictions) {
        const steps = x - idx - Math.abs(y - h);
        const higher = Math.max(y, h);
        res = Math.max(res, higher + Math.floor(steps / 2));
        idx = x;
        h = y;
    }
    return res;
};

console.log(maxBuilding(5, [[2, 1], [4, 1]])); // Output: 2
console.log(maxBuilding(6, [[1, 1], [6, 1]])); // Output: 2
console.log(maxBuilding(10, [[5, 3], [2, 5], [7, 4]])); // Output: 5