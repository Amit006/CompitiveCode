/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let result = [];
  let startPair = [];
  let merge = false;
  for (let i = 0; i < intervals.length; i++) {
    if (
      newInterval[0] >= intervals[i][0] &&
      newInterval[0] <= intervals[i][1]
    ) {
      startPair = intervals[i];
    } else if (newInterval[0] < intervals[i][0] && startPair.length === 0) {
      startPair = [newInterval[0], intervals[i][1]];
    }

    if (startPair.length && !merge) {
      if (newInterval[1] < intervals[i][0]) {
        result.push([startPair[0], newInterval[1]]);
        result.push(intervals[i]);
        merge = true;
      } else if (newInterval[1] < intervals[i][1]) {
        result.push([startPair[0], intervals[i][1]]);
        merge = true;
      } else if (
        newInterval[1] >= intervals[i][1] &&
        i === intervals.length - 1
      ) {
        result.push([startPair[0], newInterval[1]]);
        merge = true;
      }

      continue;
    }
    result.push(intervals[i]);
  }

  if (!merge) result.push(newInterval);

  return result;
};

const intervals = [
    [1, 3],
    [6, 9],
  ],
  newInterval = [2, 5];
console.log(insert(intervals, newInterval));

const interval2 = [[1, 5]],
  newInterval2 = [2, 3];
console.log(insert(interval2, newInterval2));
const interval3 = [
    [1, 1],
    [2, 8],
    [9, 12],
  ],
  newInterval3 = [3, 12];
console.log(insert(interval3, newInterval3));

// Optimized solution
const insertInterval = function (intervals, newInterval) {
  const result = [];
  let i = 0;
  const n = intervals.length;


  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }


  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }


  result.push(newInterval);


  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};

console.log(insertInterval(intervals, newInterval));
console.log(insertInterval(interval2, newInterval2));
console.log(insertInterval(interval3, newInterval3));
