
// var MinStack = function () {
//     this.stack = [];
//     this.minStack = [];

// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function (val) {
//     this.stack.push(val);

//     const lastVal = this.minStack.length ? this.minStack[this.minStack.length - 1] : Infinity;
//     if (lastVal > val) this.minStack.push(val);
//     else
//         this.minStack.push(lastVal);
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//     this.stack.pop();
//     this.minStack.pop()
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {
//     return this.stack[this.stack.length - 1]
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function () {
//     return this.minStack[this.minStack.length - 1]
// };

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// console.log("MinStack");
// var minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin());

// Optimized version
var MinStackOp = function () {
    this.minStack = [];
};


MinStackOp.prototype.push = function (val) {
   const lastMin = this.minStack.length ? this.getMin() : val;
    // Store as an object so you don't lose the original 'val'
    this.minStack.push({
        value: val,
        min: Math.min(val, lastMin)
    });
}

MinStackOp.prototype.top = function () {
    return this.minStack[this.minStack.length - 1].value;
};

MinStackOp.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1].min;
};

console.log("MinStackOp");
var minStackOp = new MinStackOp();
minStackOp.push(-2);
minStackOp.push(0);
minStackOp.push(-3);
console.log(minStackOp.getMin());