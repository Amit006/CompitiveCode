var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => ( a[1] - b[1] ));

   console.log(intervals);
   const res = [];
    let count = 0;

    for (let i = 0; i < intervals.length; i++) {
        let start = intervals[i][0];
        let end = intervals[i][1];

        if (res.length === 0 || res[res.length - 1][1] <= start) {
            res.push(intervals[i]);
        } else {
            // res[res.length - 1][1] = Math.max(end, res[res.length - 1][1]);
            console.log("removing ", intervals[i]);
            count++;
        }
    }


    return count;
};

const input = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
];
const input2 = [[1,100],[11,22],[1,11],[2,12]]
const input3 = [[1,2],[2,3],[3,4],[1,3]];
const input4 = [[1,100],[11,22],[1,11],[2,12]];
const input5 = [[-52,31],[-73,-26],[82,97],[-65,-11],[-62,-49],[95,99],[58,95],[-31,49],[66,98],[-63,2],[30,47],[-40,-26]]
// console.log(eraseOverlapIntervals(input));
// console.log(eraseOverlapIntervals(input2));
// console.log(eraseOverlapIntervals(input3));
// console.log(eraseOverlapIntervals(input4));
console.log(eraseOverlapIntervals(input5));
