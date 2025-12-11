

const combinationSum = function(candidates, target) {
    const result = [];

    const backtrack = (remaining, combination, start) => {
        if (remaining === 0) {
            result.push([...combination]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > remaining) continue;

            combination.push(candidates[i]);
            backtrack(remaining - candidates[i], combination, i);
            combination.pop();
        }

    };
    backtrack(target, [], 0);
    return result;
};


console.log(combinationSum([2,3,6,7], 7)); // [[7],[2,2,3]]
console.log(combinationSum([2,3,5], 8)); // [[2,2,2,2],[2,3,3],[3,5]]