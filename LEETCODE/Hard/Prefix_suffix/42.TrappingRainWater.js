/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let startPtr = 0, endPtr = height.length - 1;
    let leftMax = height[startPtr], rightMax = height[endPtr], water = 0;

    while (startPtr < endPtr) {
        let startVal = height[startPtr], endVal = height[endPtr];
        if (startVal <= endVal) {
            leftMax = Math.max(leftMax, startVal);
            water += (leftMax - startVal);

            startPtr++;
        } else {

            rightMax = Math.max(rightMax, endVal);
            water += (rightMax - endVal)

            endPtr--;
        }

    }



    return water;
};


const input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(input));
const input2 = [4, 2, 0, 3, 2, 5];
console.log(trap(input2));
const input3 = [4, 2, 3];
console.log(trap(input3));
const input4 = [5, 4, 1, 2];
console.log(trap(input4));
const input5 = [0, 7, 1, 4, 6];
console.log(trap(input5));


// Optimized Solution
// The above solution is already optimized with O(n) time complexity and O(1) space complexity
// Further optimization is not possible for this problem as we need to check each element to calculate the trapped water.

// using dp array
var trapDP = function (height) {
    const n = height.length;
    if (n === 0) return 0;
    const leftMax = new Array(n).fill(0);
    const rightMax = new Array(n).fill(0);
    let water = 0;
    leftMax[0] = height[0];
    rightMax[n - 1] = height[n - 1];

    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    for (let i = 0; i < n; i++) {
        water += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    return water;
} 



// monotonic stack
var trap = function(height) {
    const stack = []; // Decreasing monotonic stack
    let result = 0;
    
    for (let i = 0; i < height.length; i++) {
        // Maintain decreasing order
        while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
            let popHeight = height[stack.pop()];
            
            if (stack.length === 0) break;
            
            let width = i - stack[stack.length - 1] - 1;
            let wallHeight = Math.min(height[i], height[stack[stack.length - 1]]) - popHeight;
            
            result += width * wallHeight;
        }
        stack.push(i);
    }
    return result;
};
