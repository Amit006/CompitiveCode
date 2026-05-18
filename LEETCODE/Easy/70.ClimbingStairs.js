const assert  = require("assert").strict;

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const DP = new Array(n+1).fill(-1);
    
    const DFS = (n) => {
        if(n < 4 ) return n;
        
        if(DP[n] != -1) return DP[n];
        
        DP[n] = DFS(n-1)+ DFS(n-2);
        
        return DP[n];
    }
    
    return DFS(n);
};


assert.strictEqual(climbStairs(2), 2);
assert.strictEqual(climbStairs(3), 3);
assert.strictEqual(climbStairs(4), 5);
//logTestcase;
assert.strictEqual(climbStairs(30), 1346269);
assert.strictEqual(climbStairs(45), 1836311903);


// DP with Tabulation two variables
var climbStairsDp = function (n) {
    if (n < 4) return n;

    let prev = 3,
        prev1 = 2;

    for (let i = 4; i <= n; i++) {
        const current = prev + prev1;
        prev1 = prev;
        prev = current;
    }

    return prev;
};

assert.strictEqual(climbStairsDp(2), 2);
assert.strictEqual(climbStairsDp(3), 3);
assert.strictEqual(climbStairsDp(4), 5);
//logTestcase;
assert.strictEqual(climbStairsDp(30), 1346269);
assert.strictEqual(climbStairsDp(45), 1836311903);