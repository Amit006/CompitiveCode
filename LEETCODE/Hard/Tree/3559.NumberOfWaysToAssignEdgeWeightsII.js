/**
 * @param {number[][]} edges
 * @param {number[][]} queries
 * @return {number[]}
 */
var assignEdgeWeights = function(edges, queries) {
    const MOD = 1000000007;
    const n = edges.length + 1;
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const depth = Array(n + 1).fill(0);
    const parent = Array(n + 1).fill(0);
    const visited = Array(n + 1).fill(false);
    const q = [1];
    visited[1] = true;
    for (let head = 0; head < q.length; head++) {
        const node = q[head];
        for (const nei of adj[node]) {
            if (!visited[nei]) {
                visited[nei] = true;
                depth[nei] = depth[node] + 1;
                parent[nei] = node;
                q.push(nei);
            }
        }
    }

    let LOG = 1;
    while ((1 << LOG) <= n) 
        LOG++;
    const up = Array.from({ length: LOG }, () => Array(n + 1).fill(0));
    up[0] = [...parent];
    for (let k = 1; k < LOG; k++) {
        for (let v = 0; v <= n; v++) {
            up[k][v] = up[k - 1][up[k - 1][v]];
        }
    }
    const lca = (u, v) => {
        if (depth[u] < depth[v]) {
            [u, v] = [v, u];
        }
        let diff = depth[u] - depth[v];
        for (let k = 0; k < LOG; k++) {
            if ((diff >> k) & 1) {
                u = up[k][u];
            }
        }
        if (u === v) 
            return u;
        for (let k = LOG - 1; k >= 0; k--) {
            if (up[k][u] !== up[k][v]) {
                u = up[k][u];
                v = up[k][v];
            }
        }
        return up[0][u];
    };
    const pow2 = Array(n + 1).fill(1);
    for (let i = 1; i <= n; i++) {
        pow2[i] = (pow2[i - 1] * 2) % MOD;
    }
    const ans = [];
    for (const [u, v] of queries) {
        const ancestor = lca(u, v);
        const dist = depth[u] + depth[v] - 2 * depth[ancestor];
        ans.push(dist === 0 ? 0 : pow2[dist - 1]);
    }
    return ans;
};

console.log(assignEdgeWeights([[1,2],[1,3],[2,4],[2,5]], [[4,5],[3,4],[2,3]])); // [2, 4, 0]