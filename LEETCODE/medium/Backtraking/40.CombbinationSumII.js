const candidates = [10, 1, 2, 7, 6, 1, 5];
target = 8;

const CombinationSum2 = function (candidates, target) {
    candidates = candidates.sort((a, b) => a - b);
    const result = [];

    const backtrack = (start, path, target) => {
        if (target === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            if (candidates[i] > target) break;

            path.push(candidates[i]);
            backtrack(i + 1, path, target - candidates[i]);
            path.pop();
        }
    };
    backtrack(0, [], target);
    return result;
};

console.log(CombinationSum2(candidates, target));
