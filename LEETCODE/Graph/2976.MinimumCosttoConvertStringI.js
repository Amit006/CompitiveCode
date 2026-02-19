
var minimumCost = function(source, target, original, changed, cost) {
    const n = source.length;
    let totalCost = 0;
    const changeMap = new Map();

    for (let i = 0; i < original.length; i++) {
        changeMap.set(original[i], { to: changed[i], cost: cost[i] });
    }

    for (let i = 0; i < n; i++) {
        if (source[i] === target[i]) continue;

        if (changeMap.has(source[i])) {
            const { to, cost: changeCost } = changeMap.get(source[i]);
            if (to === target[i]) {
                totalCost += changeCost;
            } else {
                return -1;
            }
        } else {
            return -1;
        }
    }

    return totalCost;
};

// Example usage:
console.log(minimumCost("abc", "bcd", ['a', 'b', 'c'], ['b', 'c', 'd'], [1, 1, 1]));
// Output: 3
console.log(minimumCost("abc", "def", ['a', 'b', 'c'], ['d', 'e', 'f'], [2, 2, 2]));
// Output: -1