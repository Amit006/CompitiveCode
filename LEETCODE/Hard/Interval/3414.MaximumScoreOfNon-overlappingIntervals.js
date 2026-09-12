/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var maximumWeight = function(intervals) {
    const arr = [];

    for (let i = 0; i < intervals.length; i++) {
        const [left, right, weight] = intervals[i];
        arr.push([right, left, weight, i]);
    }

    arr.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        if (a[1] !== b[1]) return a[1] - b[1];
        return a[3] - b[3];
    });

    const n = arr.length;
    const rightEnds = arr.map(item => item[0]);

    let previous = Array.from(
        { length: n + 1 },
        () => [0, []]
    );

    const better = (a, b) => {
        if (a[0] !== b[0]) {
            return a[0] > b[0] ? a : b;
        }

        const x = a[1];
        const y = b[1];

        const size = Math.min(x.length, y.length);

        for (let i = 0; i < size; i++) {
            if (x[i] !== y[i]) {
                return x[i] < y[i] ? a : b;
            }
        }

        return x.length <= y.length ? a : b;
    };

    const lowerBound = (end, target) => {
        let left = 0;
        let right = end;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (rightEnds[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    };

    for (let selectedCount = 1; selectedCount <= 4; selectedCount++) {
        const current = Array.from(
            { length: n + 1 },
            () => [0, []]
        );

        for (let i = 1; i <= n; i++) {
            const [right, left, weight, originalIndex] = arr[i - 1];

            const skip = current[i - 1];

            const previousCount = lowerBound(
                i - 1,
                left
            );

            const oldScore = previous[previousCount][0];
            const oldIndices = previous[previousCount][1];

            const newIndices = [...oldIndices, originalIndex];
            newIndices.sort((a, b) => a - b);

            const take = [
                oldScore + weight,
                newIndices
            ];

            current[i] = better(skip, take);
        }

        previous = current;
    }

    return previous[n][1];
};
const intervals = [[1,3,4],[2,5,2],[4,6,4],[7,8,1]];
console.log(maximumWeight(intervals));