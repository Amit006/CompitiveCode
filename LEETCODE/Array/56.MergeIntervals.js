const mergeIntervals = function (intervals) {
  if (intervals.length === 0) return [];
  // Sort intervals based on the start time
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [];
  let prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i];
    if (curr[0] <= prev[1]) {
      // Overlapping intervals, merge them
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      // No overlap, push the previous interval and update prev
      merged.push(prev);
      prev = curr;
    }
  }
  // Push the last interval
  merged.push(prev);
  return merged;
};

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(mergeIntervals(intervals));

const mergeIntervalsOptimized = function (intervals) {
  if (intervals.length === 0) return [];
  // Sort intervals based on the start time
  intervals.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]));
  let ans = [];
  for (let i = 0; i < intervals.length; i++) {
    if (ans.length && ans[ans.length - 1][1] >= intervals[i][0]) {
      ans[ans.length - 1][1] = Math.max(
        ans[ans.length - 1][1],
        intervals[i][1]
      );
    } else ans.push(intervals[i]);
  }

  return ans;
};

console.log(mergeIntervalsOptimized(intervals));

const mergeIntervalsOptimized2 = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [];

  for (let i = 0; i < intervals.length; i++) {
    let start = intervals[i][0];
    let end = intervals[i][1];

    if (res.length === 0 || res[res.length - 1][1] < start) {
      res.push(intervals[i]);
    } else {
      res[res.length - 1][1] = Math.max(end, res[res.length - 1][1]);
    }
  }

  return res;
};
