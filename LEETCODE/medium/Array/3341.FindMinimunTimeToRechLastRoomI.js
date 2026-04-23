

const findMinimumTime = function (moveTime) {
  const n = moveTime.length;
  const m = moveTime[0].length;
  let minimumTime = moveTime[0][0]; // Start from the first cell

  for(let i = 1; i < n; i++) {
    for(let j = 1; j < m; j++) {
        const fromTop = i > 0 ? moveTime[i-1][j] : Infinity;
        const fromLeft = j > 0 ? moveTime[i][j] : Infinity;
        minimumTime += Math.min(fromTop, fromLeft)+1; // Add 1 for the current cell
    }
  }
  return minimumTime +1; // Add 1 for the last cell
}


// console.log(findMinimumTime([[0,4],[4,4]])); // Output: 8 -> it should be 6 
// console.log(findMinimumTime([[0,0,0],[0,0,0]])); // Output: 3 -> it should be 3
// console.log(findMinimumTime([[0,1],[1,2]])); // Output: 3 -> it should be 3
console.log(findMinimumTime([[15,58],[67,4]])); // Output: 3 -> it should be 3