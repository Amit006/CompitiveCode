// Greedy solution using sorting and a single pass
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {

    // interval sorted based on start date 
    intervals.sort((a, b) => a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]);

    let rcount = 1, l = intervals[0][0], r = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        const curr = intervals[i];
        if (curr[0] <= r && curr[1]> r) {
                r = curr[1];
                rcount++;

        } else if (curr[0] > r && curr[1] > r) {
            l = curr[0];
            r = curr[1];
            rcount++
        }
    }
    return rcount;
};


console.log(removeCoveredIntervals([[1, 4], [3, 6], [2, 8]])) // 2
console.log(removeCoveredIntervals([[1, 4], [2, 3]])) // 1



// Optimized solution using sorting and a single pass
/**
 * @param {number[][]} intervals
 * @return {number}
 */

 // sweep-line algorithm
var removeCoveredIntervalsOptimized = function (intervals) {

    // interval sorted based on start date 
    intervals.sort((a, b) => a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]);

    let rcount = 1, l = intervals[0][0], r = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][1] <= r) 
            continue;
        
        rcount++;
        r = intervals[i][1];
    }
    return rcount;
};

console.log(removeCoveredIntervalsOptimized([[1, 4], [3, 6], [2, 8]])) // 2
console.log(removeCoveredIntervalsOptimized([[1, 4], [2, 3]])) // 1


var removeCoveredIntervalsOptimized2 = function (intervals) {

    // interval sorted based on start date 
    intervals.sort((a, b) => a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]);

    let rcount = 0, r = 0;

    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1] > r) {
            rcount++;
            r = intervals[i][1];
        }
    }
    return rcount;
}

console.log(removeCoveredIntervalsOptimized2([[1, 4], [3, 6], [2, 8]])) // 2
console.log(removeCoveredIntervalsOptimized2([[1, 4], [2, 3]])) // 1