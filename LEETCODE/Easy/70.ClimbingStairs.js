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
