/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */
var remainingMethods = function(n, k, invocations) {
    const adj = Array.from(
        { length: n },
        () => []
    );

    for (const [u, v] of invocations) {
        adj[u].push(v);
    }

    const suspicious = Array(n).fill(false);
    suspicious[k] = true;

    const queue = [k];
    let head = 0;

    while (head < queue.length) {
        const u = queue[head++];

        for (const v of adj[u]) {
            if (!suspicious[v]) {
                suspicious[v] = true;
                queue.push(v);
            }
        }
    }

    for (const [u, v] of invocations) {
        if (!suspicious[u] && suspicious[v]) {
            return Array.from(
                { length: n },
                (_, i) => i
            );
        }
    }

    const result = [];

    for (let i = 0; i < n; i++) {
        if (!suspicious[i]) {
            result.push(i);
        }
    }

    return result;
};

console.log(remainingMethods(5, 0, [[0, 1], [1, 2], [2, 3], [3, 4]])); // Output: []
console.log(remainingMethods(5, 1, [[0, 1], [1, 2], [2, 3], [3, 4]])); // Output: [0]
console.log(remainingMethods(5, 2, [[0, 1], [1, 2], [2, 3], [3, 4]])); // Output: [0, 1]    