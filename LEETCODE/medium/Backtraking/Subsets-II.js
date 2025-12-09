const getAllDistinctSubset = (nums) => {
    const result = [];
    let subset = "";

    const backtrack = (start) => {
        if (result.indexOf(subset) === -1) result.push(subset);

        for (let i = start; i < nums.length; i++) {
            subset += nums[i];
            backtrack(i + 1);
            subset = subset.slice(0, subset.length - 1);
        }
    };

    backtrack(0);
    console.log(result);
    return result.map((d) => d.split("").map((num) => Number(num)));
};

// console.log(getAllDistinctSubset([1, 2, 3]));
// console.log(getAllDistinctSubset([1, 2, 2]));
// console.log(getAllDistinctSubset([0]));
// console.log(getAllDistinctSubset([-1, 1, 2]));

const getAllDistinctSubsetII = (nums) => {
    nums = nums.sort((a, b) => a - b);
    const result = [];
    const subset = [];

    const backtrack = (start) => {
        result.push([...subset]);

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }

            subset.push(nums[i]);
            backtrack(i + 1);
            subset.pop();
        }
    };

    backtrack(0);
    // console.log(result);
    return result;
};

// console.log(getAllDistinctSubset([1, 2, 3]));
console.log(getAllDistinctSubsetII([1, 2, 2]));
// console.log(getAllDistinctSubset([0]));
// console.log(getAllDistinctSubsetII([-1, 1, 2]));
// console.log(getAllDistinctSubsetII([4, 4, 4, 1, 4]));

/*

[[],[1],[1,4],[1,4,4],[1,4,4,4],[1,4,4,4,4],[4],[4,4],[4,4,4],[4,4,4,4]]

[
  [],             [ 4 ],
  [ 4, 4 ],       [ 4, 4, 4 ],
  [ 4, 4, 4, 1 ], [ 4, 4, 4, 1, 4 ],
  [ 4, 4, 4, 4 ], [ 4, 4, 1 ],
  [ 4, 4, 1, 4 ], [ 4, 4, 4 ],
  [ 4, 1 ],       [ 4, 1, 4 ],
  [ 4, 4 ],       [ 1 ],
  [ 1, 4 ],       [ 4 ]
]

*/
