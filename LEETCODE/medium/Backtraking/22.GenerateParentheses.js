

const generateParenthesis = function(n) {
    const result = [];

    const backtrack = (current, open, close) => {
        if (current.length === n * 2) {
            result.push(current);
            return;
        }
        for(let i = 0; i < 2; i++) {
            if (i === 0 && open < n) {
                backtrack(current + '(', open + 1, close);
            } else if (i === 1 && close < open) {
                backtrack(current + ')', open, close + 1);
            }
        }
    }
    backtrack('', 0, 0);
    return result;
}

// console.log(generateParenthesis(3));
console.log(generateParenthesis(1));

module.exports = { generateParenthesis };