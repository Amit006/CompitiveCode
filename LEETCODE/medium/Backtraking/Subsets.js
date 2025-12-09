

const getAllDistinctSubset = (nums) => {
    const result = [];
    const subset = [];
    
    const backtrack = (start) => {
        result.push([...subset]);
    
        for (let i = start; i < nums.length; i++) {
        // if (i > start && nums[i] === nums[i - 1]) continue; // Skip duplicates
        if(subset.includes(nums[i])) continue;

        subset.push(nums[i]);
        backtrack(i + 1);
        subset.pop();
        }
    };
    
    nums.sort((a, b) => a - b); // Sort to handle duplicates
    backtrack(0);
    return result;


}


// console.log(getAllDistinctSubset([1, 2, 3]));
console.log(getAllDistinctSubset([1, 2, 2]));
// console.log(getAllDistinctSubset([0]));
