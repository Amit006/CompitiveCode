

const MaximumAverageSubarrayI = (nums, k) => {
  let maxSum = Number.NEGATIVE_INFINITY,
    windowSum = 0,
    windowStart = 0;
    for (windowStart; windowStart <= nums.length-k; windowStart++) {
        for (let i = windowStart; i < windowStart + k; i++) {
            windowSum += nums[i];
        }
        maxSum = Math.max(maxSum, windowSum);
        windowSum = 0;
    }
    return maxSum/k;
}


let input = [1,12,-5,-6,50,3], k = 4;
// console.log(MaximumAverageSubarrayI(input, k));
let input2 = [5], k2 = 1;
// console.log(MaximumAverageSubarrayI(input2, k2)); 
let input3 = [0,1,1,3,3], k3 = 4;
// console.log(MaximumAverageSubarrayI(input3, k3));
let input4 = [-1], k4 = 1;
// console.log(MaximumAverageSubarrayI(input4, k4));


// Optimized approach
const MaximumAverageSubarrayI_Optimized = (nums, k) => {
    let maxSum = Number.NEGATIVE_INFINITY,
        windowSum = 0,
        windowStart = 0;
        for (let i = 0; i < nums.length; i++) {
            windowSum += nums[i]; // add the next element
            // slide the window, we don't need to slide if we've not hit the required window size of 'k'
            if (i >= k - 1) {
                maxSum = Math.max(maxSum, windowSum);
                windowSum -= nums[windowStart]; // subtract the element going out
                windowStart += 1; // slide the window ahead
            }
        }
        return maxSum/k;
    }

// console.log(MaximumAverageSubarrayI_Optimized(input, k));
// console.log(MaximumAverageSubarrayI_Optimized(input2, k2)); 
// console.log(MaximumAverageSubarrayI_Optimized(input3, k3));
// console.log(MaximumAverageSubarrayI_Optimized(input4, k4));


// optimized2
const MaximumAverageSubarrayI_Optimized2 = (nums, k) => {
    let maxSum = Number.NEGATIVE_INFINITY,
        windowSum = 0,
        windowStart = 0;
        for (let i = 0; i < k; i++) {
            windowSum = windowSum + nums[i]; // add the next element
        }
        if(nums.length == k) return windowSum/k;
        maxSum = windowSum;
        for (let i = k; i < nums.length; i++) {
            windowSum += nums[i] - nums[windowStart];
            maxSum = Math.max(maxSum, windowSum);
            windowStart += 1; // slide the window ahead
        }
        return maxSum/k;
    }

// console.log(MaximumAverageSubarrayI_Optimized2(input, k));
// console.log(MaximumAverageSubarrayI_Optimized2(input2, k2)); 
// console.log(MaximumAverageSubarrayI_Optimized2(input3, k3));
// console.log(MaximumAverageSubarrayI_Optimized2(input4, k4));
let input5 = [9,7,3,5,6,2,0,8,1,9], k5 = 6;
console.log(MaximumAverageSubarrayI_Optimized2(input5, k5));