// Cross the wall solution
// A: height (number of rows), B: width of wall, C: array of brick lengths (size N = A * ?)
/*
Cross the wall

Problem Description

There is a rectangular brick wall consisting of several rows of bricks.
The wall has A rows, and the length of each row is B units. The bricks have the same height that can be considered as 1 unit but has a different length.
You are given an integer array C denoting length of N bricks.
The bricks are chosen one by one from the left of the array, and each row of the wall is built from left to right.
While building the wall, if the sum of the length of bricks in a row is equal to B, then start building another row again from left to right.
When the last brick of the wall is used the wall length of rows is now equal to B. Then start building another row again from left to right.
Input is such that you will end up building the wall consisting of A rows, and the length of each row will be equal to B.
You need to find a vertical line going from top to bottom of the wall that crossed through the fewest number of bricks.
Return the least number of bricks through which the vertical line crossed.

NOTE:

If your line goes through the edge of a brick, then the brick is not considered as crossed.

You cannot draw a vertical line just along one of the two vertical edges of the wall, in which case the line will cross no bricks.

Problem Constraints

1 <= N <= 10⁵

1 <= A x B <= 10⁹

1 <= C[i] <= 10⁹

Input Format

First argument is an integer A denoting the height of the wall.
Second argument is an integer B denoting the length of the wall.
Third argument is an integer array C of size N denoting length of bricks.

Output Format

Return an integer denoting the minimum number of crossed bricks.

Example Input

Input 1:
A = 2
B = 7
C = [3, 4, 2, 2,
A = 3
B = 5
C = [1, 2, 2, 5,Output**

Output 1:
1

Output 2:
1

*/
function minBricksCrossed(A, B, C) {
    // Split C into rows
    let rows = [];
    let idx = 0;
    for (let i = 0; i < A; i++) {
        let row = [];
        let sum = 0;
        while (sum < B && idx < C.length) {
            row.push(C[idx]);
            sum += C[idx];
            idx++;
        }
        rows.push(row);
    }
    // Count edge positions
    const edgeCount = {};
    for (let row of rows) {
        let pos = 0;
        // Exclude the last brick (don't count the wall's right edge)
        for (let i = 0; i < row.length - 1; i++) {
            pos += row[i];
            edgeCount[pos] = (edgeCount[pos] || 0) + 1;
        }
    }
    console.log(edgeCount);
    let maxEdges = 0;
    for (let key in edgeCount) {
        if (edgeCount[key] > maxEdges) maxEdges = edgeCount[key];
    }
    return A - maxEdges;
}

// Example usage:
let A = 3, B = 5, C = [1, 2, 2, 5, 3, 2];
// console.log(minBricksCrossed(A, B, C)); // Output: 1



function solve(A, B, C) {
    const edgeCounts = new Map();
    let brickIndex = 0;
    
    for (let row = 0; row < A; row++) {
        let rowSum = 0;
        while (rowSum < B && brickIndex < C.length) {
            const brickLength = C[brickIndex];
            const newSum = rowSum + brickLength;
            if (newSum < B) {
                edgeCounts.set(newSum, (edgeCounts.get(newSum) || 0) + 1);
            }
            rowSum = newSum;
            brickIndex++;
        }
    }

    let maxEdges = 0;
    for (const count of edgeCounts.values()) {
        if (count > maxEdges) {
            maxEdges = count;
        }
    }
    
    return A - maxEdges;
}


// console.log(solve(A, B, C)); // Example usage


const CrossTheWall = (A, B, C) => {
  let Wall = [];
  let bricks = [];
  let sum = 0;

  for (let i = 0; i < C.length; i++) {
    sum += C[i];
    bricks.push(C[i]);
    if (sum === B) {
      Wall.push(bricks);
      bricks = [];
      sum = 0;
    }
  }

 console.log(Wall);
};

console.log(CrossTheWall(2, 7, [3, 4, 2, 2, 3])); // [[1, 2, 3], [4]]
   