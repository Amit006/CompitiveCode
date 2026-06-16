/**
 * @param {string} s
 * @return {string}
 */
const isLower = /^[a-z]$/;
const handleInput = function (str, stack) {

    switch (str) {
        case "*": {
            if (stack.length)
                stack.pop();
            break;
        }

        case "#": {
            if (stack.length) {
                const preLength = stack.length;
                for (let j = 0; j < preLength; j++) stack.push(stack[j]);
            }
            break;
        }
        case "%": {
            if (stack.length)
                for (let i = 0, j = stack.length - 1; i < j; i++, j--) {
                    [stack[i], stack[j]] = [stack[j], stack[i]];
                }

            break;
        }
        default: {
            if (isLower.test(str)) {
                stack.push(str);

            }
        }

    }
    return stack;
}
var processStr = function (s) {
    if (!s) return "";
    let stack = new Array();

    for (let i = 0; i < s.length; i++) {
        handleInput(s[i], stack);
    }
    return stack.join("");
};

console.log(processStr("ab#c")); // Output: "ac"
console.log(processStr("a##c")); // Output: "c"
console.log(processStr("a#c")); // Output: "c"
console.log(processStr("abc*de#f%g")); // Output: "abdfg"