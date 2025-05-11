
/**
 * Recursive implementation of the C++ code in JavaScript.
 * bar(x, y): Recursively computes as per the original C++ logic.
 * foo(x, y): Recursively computes as per the original C++ logic.
 */

function bar(x, y) {
    if (x === 0) return y;
    return bar(x, bar(x, y - 1));
}

function foo(x, y) {
    if (y === 0) return 1;
    return bar(x, foo(x, y - 1));
}

// Example usage:
const x = 2, y = 3;
console.log(foo(x, y)); // Output: 8
