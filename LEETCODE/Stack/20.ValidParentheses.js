/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if(s.length <=1 ) return false;

    let strArray = s.split("");
    let stack = [];
    let openBraces = { ")": "(", "}": "{", "]": "[" }
    for (let i = 0; i < strArray.length; i++) {
        let str = openBraces[strArray[i]];
        if (str) {
            if (str !== stack.pop()) return false
        } else
            stack.push(strArray[i]);
    }

    return  stack.length ?  false : true;
};

// console.log(isValid("()"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
// console.log(isValid("([)]"));
// console.log(isValid("{[]}"));


// Clean version
var isValidC = function (s) {
    if (s.length <= 1) return false;
    
    let stack = [];
    let openBraces = { ")": "(", "}": "{", "]": "[" };
    
    for (let char of s) {
        if (openBraces[char]) {
            if (stack.pop() !== openBraces[char]) return false;
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};

// console.log(isValidC("()"));
// console.log(isValidC("()[]{}"));
// console.log(isValidC("(]"));
// console.log(isValidC("([)]"));
// console.log(isValidC("{[]}"));


// Optimized version

/**
 * @param {string} s
 * @return {boolean}
 */
var isValidD = function(s) {
    const len = s.length;
    if (len % 2 !== 0) return false;

    // Pre-allocating a Uint16Array is faster than a dynamic array 
    // because it avoids resizing and stores memory contiguously.
    const stack = new Uint16Array(len);
    let ptr = 0;

    for (let i = 0; i < len; i++) {
        const code = s.charCodeAt(i);

        // CharCodes: ( is 40, ) is 41, [ is 91, ] is 93, { is 123, } is 125
        if (code === 40 || code === 91 || code === 123) {
            stack[ptr++] = code;
        } else {
            if (ptr === 0) return false; // Closing bracket with nothing to pop
            
            const top = stack[--ptr];
            
            // Check if the closing bracket matches the top of the stack
            // Using char codes directly is faster than string comparisons
            if (
                (code === 41 && top !== 40) ||
                (code === 93 && top !== 91) ||
                (code === 125 && top !== 123)
            ) {
                return false;
            }
        }
    }

    return ptr === 0;
};


console.log(isValidD("()"));
console.log(isValidD("()[]{}"));
console.log(isValidD("(]"));
console.log(isValidD("([)]"));
console.log(isValidD("{[]}"));