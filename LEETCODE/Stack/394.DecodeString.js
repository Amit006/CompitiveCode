/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "]") {
            let val = "";
            let str = "";

            while (stack[stack.length - 1] != "[") {
                str = stack.pop() + str;
            }
            stack.pop();
            while (parseInt(stack[stack.length - 1]) > -1) {
                const v = stack.pop();
                val = String(v) + val;
            }



            stack.push(str.repeat(val))

        } else {
            stack.push(s[i]);
        }

    }
    return stack.join("");
};

// console.log(decodeString("3[a]2[bc]"));
// console.log(decodeString("3[a2[c]]"));
// console.log(decodeString("2[abc]3[cd]ef"));


// Optimized version
var decodeString = function (s) {
    let stack = [];
    let currentNum = 0;
    let currentString = "";

    for (let char of s) {
        if (char >= '0' && char <= '9') {
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === '[') {
            stack.push(currentString);
            stack.push(currentNum);
            currentString = "";
            currentNum = 0;
        } else if (char === ']') {
            const num = stack.pop();
            const prevString = stack.pop();
            currentString = prevString + currentString.repeat(num);
        } else {
            currentString += char;
        }
    }
    return currentString;
}

console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]ef"));