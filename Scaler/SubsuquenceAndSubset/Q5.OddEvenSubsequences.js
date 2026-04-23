const oddEvenSubsequences = (A) => {
    let maxLength = 1,
        flag = Boolean(A[0] % 2 == 0);

    for (let i = 1; i < A.length; i++) {
        const num = A[i];

        if (flag && num % 2 != 0) {
            maxLength++;
            flag = !flag;
        } else if (!flag && num % 2 == 0) {
            maxLength++;
            flag = !flag;
        }
    }

    return maxLength;
};

console.log(oddEvenSubsequences([16, 19, 13, 43, 21, 47, 20]));

// bitmasking Approach

const oddEvenSubsequencesBitmask = (A) => {
    let maxLength = 1;
    let expectedParity = A[0] & 1; // start matching first element's parity

    for (let i = 1; i < A.length; i++) {
        // We want the NEXT element to have opposite parity
        if ((A[i] & 1) !== expectedParity) {
            maxLength++;
            expectedParity ^= 1; // flip 0 → 1 or 1 → 0
        }
    }

    return maxLength;
};

console.log(oddEvenSubsequencesBitmask([16, 19, 13, 43, 21, 47, 20]));
