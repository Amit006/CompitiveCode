var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    // Step 1: sort nodes by value
    const order = Array.from({length: n}, (_, i) => i).sort((a, b) => nums[a] - nums[b]);

    // Step 2: compute farthest reachable node (one greedy hop) using two pointers
    const farthest = Array(n).fill(0);
    let r = 0;
    for (let l = 0; l < n; l++) {
        while (r + 1 < n && nums[order[r+1]] - nums[order[l]] <= maxDiff) {
            r++;
        }
        farthest[order[l]] = order[r];
    }

    // Step 3: build binary lifting table
    const LOG = 17; // 2^17 > 1e5
    const jump = Array.from({length: LOG}, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) jump[0][i] = farthest[i];
    for (let k = 1; k < LOG; k++) {
        for (let i = 0; i < n; i++) {
            jump[k][i] = jump[k-1][jump[k-1][i]];
        }
    }

    // Step 4: answer queries
    const res = [];
    for (const [u, v] of queries) {
        if (u === v) {
            res.push(0);
            continue;
        }

        let start = u, target = v;
        if (nums[start] > nums[target]) [start, target] = [target, start];

        let ans = 0;
        let cur = start;
        for (let k = LOG-1; k >= 0; k--) {
            if (nums[jump[k][cur]] < nums[target]) {
                cur = jump[k][cur];
                ans += (1 << k);
            }
        }

        // Reachability must be checked by VALUE (nums isn't sorted by index),
        // and only after cur has been pushed as far as possible through the whole chain
        if (nums[farthest[cur]] >= nums[target]) {
            res.push(ans + 1);
        } else {
            res.push(-1);
        }
    }

    return res;
};

console.log(pathExistenceQueries(5, [1, 2, 3, 4, 5], 2, [[0, 4], [1, 3], [2, 2]])); // Output: [-1, 1, 0]
console.log(pathExistenceQueries(3, [1, 3, 5], 2, [[0, 2], [1, 2], [0, 1]])); // Output: [-1, -1, 1]