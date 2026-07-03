var findMaxPathScore = function (edges, online, k) {
    const n = online.length;
    const g = Array.from({ length: n }, () => []);
    let l = Infinity,
        r = 0;

    for (const [u, v, w] of edges) {
        if (!online[u] || !online[v]) {
            continue;
        }
        g[u].push([v, w]);
        l = Math.min(l, w);
        r = Math.max(r, w);
    }

    const check = (mid) => {
        const memo = new Array(n).fill(-1);

        const dfs = (u) => {
            if (u === n - 1) {
                return 0;
            }
            if (memo[u] !== -1) {
                return memo[u];
            }

            let res = Infinity;
            for (const [v, w] of g[u]) {
                if (w >= mid) {
                    res = Math.min(res, dfs(v) + w);
                }
            }
            memo[u] = res;
            return res;
        };

        return dfs(0) <= k;
    };

    if (!check(l)) {
        return -1;
    }

    while (l <= r) {
        const mid = (l + r) >> 1;
        if (check(mid)) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return r;
};

console.log(findMaxPathScore([[0, 1, 5], [1, 2, 10], [0, 2, 15]], [true, true, true], 20)); // Output: 10
console.log(findMaxPathScore([[0, 1, 5], [1, 2, 10], [0, 2, 15]], [true, false, true], 20)); // Output: -1
console.log(findMaxPathScore([[0, 1, 5], [1, 2, 10], [0, 2, 15]], [true, true, true], 5)); // Output: -1



// Another approach: using  Queue and 

var findMaxPathScoreV2 = function (edges, online, maxBudget) {
    const nodeCount = online.length;
    if (nodeCount === 0) return -1;
    const targetNode = nodeCount - 1;

    const adjacencyList = Array.from({ length: nodeCount }, () => []);
    const inDegree = new Int32Array(nodeCount);
    let maxEdgeWeight = 0;

    for (let i = 0; i < edges.length; i++) {
        const e = edges[i];
        const from = e[0], to = e[1], weight = e[2];
        adjacencyList[from].push(to, weight); // flat pairs
        inDegree[to]++;
        if (weight > maxEdgeWeight) maxEdgeWeight = weight;
    }

    const topoOrder = new Int32Array(nodeCount);
    const remainingInDegree = inDegree.slice();
    let tail = 0;
    for (let node = 0; node < nodeCount; node++) {
        if (remainingInDegree[node] === 0) topoOrder[tail++] = node;
    }
    for (let head = 0; head < tail; head++) {
        const current = topoOrder[head];
        const list = adjacencyList[current];
        for (let i = 0; i < list.length; i += 2) {
            const neighbor = list[i];
            if (--remainingInDegree[neighbor] === 0) topoOrder[tail++] = neighbor;
        }
    }

    // position of targetNode in topo order -> lets us stop the relax loop early
    let targetPos = 0;
    for (let i = 0; i < nodeCount; i++) {
        if (topoOrder[i] === targetNode) { targetPos = i; break; }
    }

    const minCostTo = new Float64Array(nodeCount);

    function isFeasible(minAllowedWeight) {
        minCostTo.fill(Infinity);
        minCostTo[0] = 0;

        for (let i = 0; i <= targetPos; i++) {
            const node = topoOrder[i];
            const cost = minCostTo[node];
            if (cost === Infinity) continue;

            const list = adjacencyList[node];
            for (let j = 0; j < list.length; j += 2) {
                const neighbor = list[j];
                const weight = list[j + 1];
                if (weight < minAllowedWeight) continue;
                if (neighbor !== targetNode && neighbor !== 0 && !online[neighbor]) continue;

                const candidateCost = cost + weight;
                if (candidateCost < minCostTo[neighbor] && candidateCost <= maxBudget) {
                    minCostTo[neighbor] = candidateCost;
                }
            }
        }
        return minCostTo[targetNode] <= maxBudget;
    }

    let low = 0, high = maxEdgeWeight, bestScore = -1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (isFeasible(mid)) {
            bestScore = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return bestScore;
};

console.log(findMaxPathScoreV2([[0, 1, 5], [1, 2, 10], [0, 2, 15]], [true, true, true], 20)); // Output: 10
console.log(findMaxPathScoreV2([[0, 1, 5], [1, 2, 10], [0, 2, 15]], [true, false, true], 20)); // Output: -1
console.log(findMaxPathScoreV2([[0, 1, 5], [1, 2, 10], [0, 2, 15]], [true, true, true], 5)); // Output: -1