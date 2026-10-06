/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {

    if (s && s.length < 0) return 0;

    let openCount = 0, closeCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") openCount++;
        else {
            if (openCount > 0) openCount--;
            else closeCount++;
        }
    }

    return openCount + closeCount;
};

// console.log(minAddToMakeValid("())")); // 1 
// console.log(minAddToMakeValid("(((")); // 3
console.log(minAddToMakeValid("()))((")); // 4


// my optimized solution
var minAddToMakeValid = function (s) {
    const stack = [];
    for(let i=0; i< s.length; i++){
        if(s[i] == "(") stack.push("(");
        else {
            if(stack[stack.length-1] == "(") {
                stack.pop();
            } else {
                stack.push(")");
            }
        }
    }
    return stack.length;
};

console.log(minAddToMakeValid("())")); // 1
console.log(minAddToMakeValid("(((")); // 3
console.log(minAddToMakeValid("()))((")); // 4