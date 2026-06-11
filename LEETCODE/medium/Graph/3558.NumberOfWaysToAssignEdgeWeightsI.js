/**
 * @param {number[][]} edges
 * @return {number}
 */
var assignEdgeWeights = function (edges) {
    const MOD = 1e9 + 7;
    if (edges.length === 0) return 0;
    
    const n = edges.length + 1;
    const adj = Array.from({ length: n + 1 }, () => []);
    
    // Build adjacency list
    for (let [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
    
    let maxDepth = 0;
    let deepestNode = 1;
    
    // DFS to find the deepest node
    const findDeepest = (node, parent, depth) => {
        if (depth > maxDepth) {
            maxDepth = depth;
            deepestNode = node;
        }
        for (let neighbor of adj[node]) {
            if (neighbor !== parent) {
                findDeepest(neighbor, node, depth + 1);
            }
        }
    };
    
    findDeepest(1, -1, 0);
    
    // DFS to find path length from root to deepest node
    const getPathLength = (node, parent, target, length) => {
        if (node === target) return length;
        for (let neighbor of adj[node]) {
            if (neighbor !== parent) {
                const result = getPathLength(neighbor, node, target, length + 1);
                if (result !== -1) return result;
            }
        }
        return -1;
    };
    
    const pathLength = getPathLength(1, -1, deepestNode, 0);
    
    // Number of ways = 2^(k-1) where k is path length
    let result = 1;
    for (let i = 0; i < pathLength - 1; i++) {
        result = (result * 2) % MOD;
    }
    
    return result;
};

console.log(assignEdgeWeights([[1, 2], [1, 3], [2, 4], [2, 5]])); // Output: 4
console.log(assignEdgeWeights([[1, 2], [1, 3], [2, 4], [2, 5], [4, 6]])); // Output: 8