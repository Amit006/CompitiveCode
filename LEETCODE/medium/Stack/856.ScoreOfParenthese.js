/**
 * @param {string} s
 * @return {number}
 */

var scoreOfParentheses = function (s) {

    if (s && s.length < 1) return 0;
    const stack = [0];


    for (let str of s) {
        if (str == ")") {
            const last = stack.pop();
            const secondLast = stack.pop();
            const total =  last == 0 ? 1 : last * 2;
            stack.push(total+secondLast);
        } else stack.push(0);
    }
    return stack.pop();
};

console.log(scoreOfParentheses("()")); // 1
console.log(scoreOfParentheses("(())")); // 2
console.log(scoreOfParentheses("()()")); // 2
console.log(scoreOfParentheses("(()(()))")); // 6


// Another approach is to use a counter to keep track of the depth of the parentheses. When we encounter an opening parenthesis, we increase the depth, and when we encounter a closing parenthesis, we decrease the depth. If we encounter a closing parenthesis and the previous character was an opening parenthesis, we add 2 raised to the current depth to the score.

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParenthesesV2 = function (s) {
    let stack = []
    let score = 0
    for (let val of s) {
        if (val === "(") stack.push(val)
        else {
            let num = 0
            while (stack[stack.length - 1] !== "(") {
                num += stack.pop()
            }
            stack.pop()
            if (num > 0) stack.push(2 * num)
            else stack.push(1)
        }
    }
    return stack.reduce((a, b) => a + b, 0)
};

console.log(scoreOfParenthesesV2("()")); // 1
console.log(scoreOfParenthesesV2("(())")); // 2
console.log(scoreOfParenthesesV2("()()")); // 2
console.log(scoreOfParenthesesV2("(()(()))")); // 6