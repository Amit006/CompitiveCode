#import <vector>
#import <iostream>
#import <cassert>

class Solution {
public:
    std::vector<int> myVector;
    int DFS(int n){
            if(n < 4) return n; 
            
            // If we already calculated this step, return it immediately
            if (myVector[n] != -1) return myVector[n];   
            
            myVector[n]= (DFS(n-1)+ DFS(n-2));
            
            return myVector[n]; 
    }
    int climbStairs(int n) {
        // Initialize the vector with -1 for sizes up to n
        myVector.assign(n + 1, -1);
        return 0 + DFS(n);
    }
};


assert(Solution().climbStairs(2) == 2);
assert(Solution().climbStairs(3) == 3);
assert(Solution().climbStairs(4) == 5);
assert(Solution().climbStairs(5) == 8);

assert(Solution().climbStairs(30) == 1346269);
assert(Solution().climbStairs(45) == 1836311903);