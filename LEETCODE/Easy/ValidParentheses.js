const assert = require("assert");

var isValid = function (s) {

    let strArray = s.split("");
    let stack = [];
    let openBraces = { ")": "(" , "}":"{", "]": "[" }
    for (let i = 0; i < strArray.length; i++) {
        let str = openBraces[strArray[i]];
        if(str){
            if(str !== stack.pop()) return false
        } else 
            stack.push(strArray[i]);
    }

    return  stack.length ?  false : true;
};

// assert(isValid("()[]{}"), true) // true
// assert(isValid("([)]"), false) // false
// assert(isValid("{[]}"),true) // true
// assert(isValid("]"), false) // false
// assert(isValid("(]"), false) // false

// console.log(isValid("(]")); // true
console.log(isValid("(")); // true
console.log(isValid("((")); // true


/*
20. Valid Parentheses

Companies
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/