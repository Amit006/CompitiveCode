const gcd = (a, b) => !b ? a : gcd(b, a % b);

const gcdSum = A => {
    let max = 0;
    const n = A.length;

    for (let i = 0; i < n; i++) {
        max = Math.max(max, A[i]);
        A[i] = gcd(A[i], max);
    }

    A.sort((a, b) => a - b);

    let res = 0;
    for (let i = 0; i < n >> 1; i++)
        res += gcd(A[i], A.at(-1 - i));

    return res;
};

console.log(gcdSum([3, 5, 6, 9])); // Output: 6