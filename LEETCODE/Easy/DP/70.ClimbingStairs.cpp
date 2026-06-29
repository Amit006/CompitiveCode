#include <vector>
#include <iostream>
#include <cassert>

class Solution
{
public:
    std::vector<int> myVector;
    int DFS(int n)
    {
        if (n < 4)
            return n;

        // If we already calculated this step, return it immediately
        if (myVector[n] != -1)
            return myVector[n];

        myVector[n] = (DFS(n - 1) + DFS(n - 2));

        return myVector[n];
    }
    int climbStairs(int n)
    {
        // Initialize the vector with -1 for sizes up to n
        myVector.assign(n + 1, -1);
        return 0 + DFS(n);
    }
    int climbStairsDp(int n)
    {
        if (n < 4)
            return n;

        int prev = 3, prev1 = 2;

        for (int i = 4; i <= n; i++)
        {
            int current = prev + prev1;
            prev1 = prev;
            prev = current;
        }

        return prev;
    }
};

int main()
{
    assert(Solution().climbStairs(2) == 2);
    assert(Solution().climbStairs(3) == 3);
    assert(Solution().climbStairs(4) == 5);
    assert(Solution().climbStairs(5) == 8);

    assert(Solution().climbStairs(30) == 1346269);
    assert(Solution().climbStairs(45) == 1836311903);

    /* DP with tabulation is faster than DFS with memoization,
    because it avoids the overhead of recursive function calls and
    can be more cache-friendly. In the DFS approach, each call to
    the function adds a layer to the call stack, which can lead to i
    ncreased time complexity due to repeated calculations.
    In contrast, the DP approach iteratively fills a t
    able (or uses variables) to store previously computed results,
    allowing it to compute the result in linear time without the
    overhead of recursion. */

    assert(Solution().climbStairsDp(2) == 2);
    assert(Solution().climbStairsDp(3) == 3);
    assert(Solution().climbStairsDp(4) == 5);
    assert(Solution().climbStairsDp(5) == 8);

    assert(Solution().climbStairsDp(30) == 1346269);
    assert(Solution().climbStairsDp(45) == 1836311903);

    return 0;
}