var maxSlidingWindow = function(nums, k) {
    const result = [];
    const deque = new Array(nums.length); // pre-allocate, but we'll manage indices
    let head = 0, tail = -1; // deque[head] is front, deque[tail] is back

    for (let i = 0; i < nums.length; i++) {
        
        while (head <= tail && deque[head] < i - k + 1) head++;
        while (head <= tail && nums[deque[tail]] <= nums[i]) tail--;
        
        deque[++tail] = i;
        
        if (i >= k - 1) result.push(nums[deque[head]]);
    }

    return result;
};


console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // [3,3,5,5,6,7]
// console.log(maxSlidingWindow([1], 1)); // [1]
// console.log(maxSlidingWindow([1,-1], 1)); // [1,-1]
// console.log(maxSlidingWindow([9,11], 2)); // [11]
// console.log(maxSlidingWindow([4,-2], 2)); // [4]