class Deque {
    constructor() {
        this.items = [];
    }


    pushFront(item) {
        this.items.unshift(item);
    }


    pushBack(item) {
        this.items.push(item);
    }

    popFront() {
        return this.items.shift();
    }

    popBack() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }   


}

var findSafeWalk = function (grid, health) {
    const m = grid.length,
        n = grid[0].length;
    const dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    const dis = Array.from({ length: m }, () => new Array(n).fill(Infinity));

    const q = new Deque();
    q.pushFront([0, 0]);
    dis[0][0] = grid[0][0];

    while (!q.isEmpty()) {
        const [cx, cy] = q.popFront();
        // the first time it leaves the queue, the shortest distance is guaranteed
        if (cx === m - 1 && cy === n - 1) {
            return true;
        }

        for (const [dx, dy] of dirs) {
            const nx = cx + dx,
                ny = cy + dy;
            if (nx < 0 || ny < 0 || nx >= m || ny >= n) {
                continue;
            }
            const cost = dis[cx][cy] + grid[nx][ny];
            // pruning: the new distance does not meet health requirements
            if (cost >= health) {
                continue;
            }

            if (cost < dis[nx][ny]) {
                dis[nx][ny] = cost;
                if (grid[nx][ny] === 0) {
                    q.pushFront([nx, ny]);
                } else {
                    q.pushBack([nx, ny]);
                }
            }
        }
    }

    return false;
};


console.log(findSafeWalk([[0, 0, 0], [0, 1, 0], [0, 0, 0]], 2)); // Output: true
console.log(findSafeWalk([[0, 1, 0], [1, 1, 1], [0, 1, 0]], 2)); // Output: false
console.log(findSafeWalk([[0, 0, 0], [0, 1, 0], [0, 0, 0]], 1)); // Output: false


// Optimization: using DP
/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function(grid, health) {
    const m = grid.length, n = grid[0].length;
    const dist = Array.from({ length: m }, () => new Array(n).fill(Infinity));
    
    dist[0][0] = grid[0][0];
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    let current = [[0, 0]];
    let next = [];

    while (current.length) {
        
        for (let idx = 0; idx < current.length; idx++) {
            const [i, j] = current[idx];
            const d = dist[i][j];

            for (const [di, dj] of dirs) {
        
                const ni = i + di, nj = j + dj;
        
                if (ni >= 0 && ni < m && nj >= 0 && nj < n) {
                    const cost = grid[ni][nj];
                    const nd = d + cost;
        
                    if (nd < dist[ni][nj]) {
                        dist[ni][nj] = nd;
        
                        if (cost === 0) current.push([ni, nj]);
                        else next.push([ni, nj]);
                    }
                }
            }
        }
        
        current = next;
        next = [];
    }

    return dist[m - 1][n - 1] <= health - 1;
}; 


console.log(findSafeWalk([[0, 0, 0], [0, 1, 0], [0, 0, 0]], 2)); // Output: true
console.log(findSafeWalk([[0, 1, 0], [1, 1, 1], [0, 1, 0]], 2)); // Output: false
console.log(findSafeWalk([[0, 0, 0], [0, 1, 0], [0, 0, 0]], 1)); // Output: false