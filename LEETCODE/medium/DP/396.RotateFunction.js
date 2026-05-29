
const  RotateFunction = function(A) {
    const n = A.length;
    let F = 0;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        F += i * A[i];
        sum += A[i];
    }

    let maxF = F;

    for (let k = 1; k < n; k++) {
        F = F + sum - n * A[n - k];
        maxF = Math.max(maxF, F);
    }

    return maxF;
}

console.log(RotateFunction([4, 3, 2, 6])); // Expected output: 26