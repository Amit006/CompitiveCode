function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const width = right - left;
        const currHeight = Math.min(height[left], height[right]);
        const area = width * currHeight;

        if (area > maxArea) {
            maxArea = area;
        }

        // Move the pointer at the smaller height inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

// Example usage:
const towers = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(towers));  // Output: 49


// faster approach
function maxArea2(height) {
     let left = 0,
        right = height.length - 1,
        maxAmount = 0;

    while (left < right) {
        let lH = height[left];
        let rH = height[right];
        let h = lH < rH ? lH : rH;
        let w = right - left;
        let area = h * w;
        if (area > maxAmount) maxAmount = area;

        if (lH < rH) {
            left++;
        } else {
            right--;
        }
    }

    return maxAmount;
}

// Example usage:
const towers2 = [1,8,6,2,5,4,8,3,7];
console.log(maxArea2(towers2));  // Output: 49