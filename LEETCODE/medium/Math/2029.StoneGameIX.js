const { abs, min } = Math;

const stoneGameIX = stones => {
    const f = [0, 0, 0];

    for (const c of stones)
        f[c % 3]++;

    if (f[0] & 1)
        return abs(f[1] - f[2]) > 2;

    return min(f[1], f[2]) > 0;
};

console.log(stoneGameIX([2, 1])); // true
console.log(stoneGameIX([2, 3])); // false
console.log(stoneGameIX([1, 2, 3])); // false