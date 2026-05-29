const sumToZero = (A) => {
    let result = [];
    A.sort((a, b) => a - b);

    // lets use two pointer approach
    for (let i = 0; i < A.length - 2; i++) {
        if (i > 0 && A[i] === A[i + 1]) continue;

        let left = i + 1;
        let right = A.length - 1;

        while (left < right) {
            const sum = A[i] + left[i] + right[i];

            if (sum == 0) {
                result.push([A[i], left[i], right[i]]);
                while (left < right && A[left] == A[left + 1]) left++;
                while (left < right && A[right] == A[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};

console.log(sumToZero([-1, 0, 1, 2, -1, -4]));
