var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    // nums is sorted, so a component only breaks where the gap to the
    // previous value exceeds maxDiff. Tag each index with its component id.
    const componentId = Array(n).fill(0);
    let currentComponent = 0;
    for (let i = 1; i < n; i++) {
        if (nums[i] - nums[i - 1] > maxDiff) {
            currentComponent++;
        }
        componentId[i] = currentComponent;
    }

    const res = [];
    for (const [u, v] of queries) {
        res.push(componentId[u] === componentId[v]);
    }

    return res;
    
};

console.log(pathExistenceQueries(5, [1, 2, 3, 4, 5], 2, [[0, 4], [1, 3], [2, 2]])); // Output: [false, true, true]
console.log(pathExistenceQueries(3, [1, 3, 5], 2, [[0, 2], [1, 2], [0, 1]])); // Output: [false, false, true]