
let minimumAverage = function (nums) {
    let avg = (min, max) => (min + max) / 2;
    let minAvg = Infinity;
    let n = nums.length;

    for( let i = 0; i < n / 2 && nums.length; i++) {
        let maxElement = Math.max(...nums);
        let minElement = Math.min(...nums);
        let currentAvg = avg(minElement, maxElement);
        minAvg = Math.min(minAvg, currentAvg);
        nums.splice(nums.indexOf(minElement), 1);
        nums.splice(nums.indexOf(maxElement), 1);
    }
    return minAvg;
};

let input = [7,8,3,4,15,13,4,1];
// console.log(minimumAverage(input));


// Optimized Approach
let minimumAverageOptimized = function (nums) {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    let minAvg = Infinity;
    for (let i = 0; i < n / 2; i++) {
        let currentAvg = (nums[i] + nums[n - 1 - i]) / 2;
        minAvg = Math.min(minAvg, currentAvg);
    }
    return minAvg;
};

let inputOptimized = [7,8,3,4,15,13,4,1];
console.log(minimumAverageOptimized(inputOptimized));



// optimized Approach 2
const minMaxAverage = (arr) => {
    if (arr.length === 0) return null;
    let min = arr[0], max = arr[0];
    for (let num of arr) {
        if (num < min) min = num;
        if (num > max) max = num;
    }
    return (min + max) / 2;
}