/**
 * @param {number} n
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var zigZagArrays = function(n, l, r) {
    const MOD = 1000000007n;
    const valueCount = r - l + 1;

    const initialDp = Array.from({ length: valueCount }, (_, i) => BigInt(i));

    const transitionMatrix = Array.from(
        { length: valueCount },
        () => Array(valueCount).fill(0n)
    );

    for (let row = 1; row < valueCount; row++) {
        for (let col = valueCount - row; col < valueCount; col++) {
            transitionMatrix[row][col] = 1n;
        }
    }

    const multiplyMatrices = (matrixA, matrixB) => {
        const size = matrixA.length;
        const result = Array.from({ length: size }, () => Array(size).fill(0n));

        for (let row = 0; row < size; row++) {
            for (let mid = 0; mid < size; mid++) {
                if (matrixA[row][mid] === 0n) continue;

                for (let col = 0; col < size; col++) {
                    result[row][col] =
                        (result[row][col] + matrixA[row][mid] * matrixB[mid][col]) % MOD;
                }
            }
        }

        return result;
    };

    const matrixPower = (matrix, power) => {
        const size = matrix.length;

        let result = Array.from({ length: size }, (_, row) =>
            Array.from({ length: size }, (_, col) => row === col ? 1n : 0n)
        );

        while (power > 0) {
            if (power & 1) {
                result = multiplyMatrices(result, matrix);
            }

            matrix = multiplyMatrices(matrix, matrix);
            power >>= 1;
        }

        return result;
    };

    const poweredTransition = matrixPower(transitionMatrix, n - 2);

    let answer = 0n;

    for (let row = 0; row < valueCount; row++) {
        for (let col = 0; col < valueCount; col++) {
            answer = (answer + poweredTransition[row][col] * initialDp[col]) % MOD;
        }
    }

    return Number((answer * 2n) % MOD);
};

console.log(zigZagArrays(3, 1, 3)); // Output: 6
console.log(zigZagArrays(4, 1, 2)); // Output: 2