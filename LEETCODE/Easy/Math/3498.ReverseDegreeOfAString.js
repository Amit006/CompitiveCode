/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
    let reverseDegree = 0;
    for (let i = 0; i < s.length; i++) {
        reverseDegree = reverseDegree + ((i + 1) * ("z".charCodeAt() - s[i].charCodeAt() + 1));
    }
    return reverseDegree;
};
console.log(reverseDegree("abc")); // Output: 6
console.log(reverseDegree("xyz")); // Output: 78