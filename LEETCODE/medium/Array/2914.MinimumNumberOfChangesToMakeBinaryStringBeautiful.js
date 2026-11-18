/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    return s.match(/../g).filter(([a, b]) => a !== b).length;
};