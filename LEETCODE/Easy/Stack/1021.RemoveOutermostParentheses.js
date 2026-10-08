/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = "";
    let balance = 0;

    for (let char of s) {
        if (char === '(') {
            if (balance > 0) result += char; // skip the outermost '('
            balance++;
        } else {
            balance--;
            if (balance > 0) result += char; // skip the outermost ')'
        }
    }

    return result;
};

console.log(removeOuterParentheses("(()())(())")); // Output: "()()()"