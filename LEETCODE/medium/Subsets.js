

const getAllDistinctSubset = (nums) => {
    const result = [];
    const subset = [];
    
    const backtrack = (start) => {
        result.push([...subset]);
    
        for (let i = start; i < nums.length; i++) {
        if (i > start && nums[i] === nums[i - 1]) continue; // Skip duplicates
        subset.push(nums[i]);
        backtrack(i + 1);
        subset.pop();
        }
    };
    
    nums.sort((a, b) => a - b); // Sort to handle duplicates
    backtrack(0);
    return result;


}