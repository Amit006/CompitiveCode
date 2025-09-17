/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {

    let stack = [];
    let currentStr = "";

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


const input = "3[a]2[bc]";
const input2 = "3[a2[c]]";
console.log(decodeString(input)); // Output: "aaabcbc"
console.log(decodeString(input2)); // Output: "accaccacc"