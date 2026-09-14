
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {

    return !(rec1[2] <= rec2[0] ||
        rec2[2] <= rec1[0] ||
        rec1[3] <= rec2[1] ||
        rec2[3] <= rec1[1])
};

console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3])) // true
console.log(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1])) // false