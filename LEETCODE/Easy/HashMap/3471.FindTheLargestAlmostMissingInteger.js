const largestInteger = (A, k) => {
    const f = new Int32Array(51);
    for (const x of A)
        f[x]++;

    let res = -1, n = A.length;
    A.forEach((c, i) => {
        if (k === n || (f[c] === 1 && (k === 1 || !i || i === n - 1)))
            res = Math.max(res, c);
    });

    return res;
};

console.log(largestInteger([1, 2, 3, 4, 5], 1)); // Output: 5