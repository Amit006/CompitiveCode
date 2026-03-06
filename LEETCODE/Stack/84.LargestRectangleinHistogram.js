

var largestRectangleArea = function(heights) {
    let stack = [];
    let maxArea = 0;

    for (let i = 1; i <= heights.length; i++) { 
        if(heights[i] > heights[i - 1]) {
            maxArea = Math.max(maxArea, heights[i - 1]*2);
            // stack.push(maxArea);
        } else if(heights[i] < heights[i - 1]) {
            maxArea = Math.max(maxArea, heights[i]*2);
            // stack.push(maxArea);
        }

    }

    return maxArea;
}


// console.log(largestRectangleArea([2,1,5,6,2,3]));
// console.log(largestRectangleArea([2,4]));


// using monotonic stack
var largestRectangleArea = function(heights) {
    let stack = [];
    let maxArea = 0;

    for (let i = 0; i <= heights.length; i++) {
        while (stack.length > 0 && (i === heights.length || heights[i] < heights[stack[stack.length - 1]])) {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }

        stack.push(i);
    }

    return maxArea;
}

console.log(largestRectangleArea([2,1,5,6,2,3]));
console.log(largestRectangleArea([2,4]));
console.log(largestRectangleArea([2,1,5,6,2,3,1]));
    