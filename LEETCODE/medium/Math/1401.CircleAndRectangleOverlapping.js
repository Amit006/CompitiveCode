/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function(radius, xCenter, yCenter, x1, y1, x2, y2) {
    const x = Math.max(x1, Math.min(xCenter, x2)) - xCenter;
    const y = Math.max(y1, Math.min(yCenter, y2)) - yCenter;

    return x * x + y * y <= radius * radius;
};

console.log(checkOverlap(1, 0, 0, 1, -1, 3, 1)); // true
console.log(checkOverlap(1, 0, 0, -1, 0, 0, 1)); // true
console.log(checkOverlap(1, 0, 0, 1, 1, 2, 2)); // false