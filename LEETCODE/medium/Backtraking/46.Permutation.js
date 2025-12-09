

var permute = function (nums) {

    let result = [];

    const backtrack = (pos, path) => {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }



        for (let i = 0; i < nums.length; i++) {
           
            if (path.includes(nums[i])) continue;
            path.push(nums[i]);
            backtrack(pos, path);
            path.pop();
        }

    }

    backtrack(0, []);

    return result;
};

console.log(permute([1, 2, 3]));