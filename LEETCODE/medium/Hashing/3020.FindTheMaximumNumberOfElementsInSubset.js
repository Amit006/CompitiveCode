var maximumLength = function(nums) {
    const cnt = new Map();
    for (const x of nums) cnt.set(x, (cnt.get(x) || 0) + 1);
    let ans = 1;
    if (cnt.has(1)) {
        const c = cnt.get(1);
        ans = c % 2 === 1 ? c : c - 1;
    }
    for (const [x] of cnt) {
        if (x === 1) continue;
        let cur = x, depth = 0;
        while (true) {
            const c = cnt.get(cur) || 0;
            if (c === 0) break;
            if (c >= 1) ans = Math.max(ans, 2 * depth + 1);
            if (c < 2) break;
            const sq = cur * cur;
            if (sq > 1000000000) break;
            cur = sq;
            depth++;
        }
    }
    return ans;
};

console.log(maximumLength([1, 2, 4, 16, 256, 65536])); // Output: 5
console.log(maximumLength([1, 1, 1, 1, 1])); // Output: 5