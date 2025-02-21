function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }
    let maxSum = 0;
    let tempSum = 0;
    // Initialize the window
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    // Slide the window over the array
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num = 3;
const maxSum = maxSubarraySum(arr, num);
console.log(maxSum); // Output: 24
