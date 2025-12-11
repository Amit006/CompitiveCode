const input = [3, 3, 0, 3];

const permutationII = function (nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    const used = Array(nums.length).fill(false);

    const backtrack = (path) => {
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue; 
            
            used[i] = true;
            path.push(nums[i]);
            backtrack(path);
            
            path.pop();
            used[i] = false;
        }   
    };

    backtrack([]);
    return res;
}
console.log(permutationII(input));