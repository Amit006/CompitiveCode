from math import gcd
from collections import defaultdict
from typing import List

class Solution:
    def numberOfSubsequences(self, nums: List[int]) -> int:
        n = len(nums)
        count = defaultdict(int)
        ans = 0

        # Iterate r. For each r, we'll:
        #   1. Add all valid (p, q) pairs where q = r - 2 into the counter
        #   2. Look up matching (s, r) pairs for all valid s
        for r in range(4, n - 2):
            # Add (p, q) pairs where q is fixed at r - 2
            q = r - 2
            for p in range(q - 1):     # p < q - 1, i.e. p <= q - 2
                g = gcd(nums[p], nums[q])
                key = (nums[p] // g, nums[q] // g)
                count[key] += 1

            # Look up (s, r) pairs
            for s in range(r + 2, n):
                g = gcd(nums[s], nums[r])
                key = (nums[s] // g, nums[r] // g)
                ans += count[key]

        return ans


# Tests
print(Solution().numberOfSubsequences([1, 2, 3, 4, 3, 6, 1]))         # 1
print(Solution().numberOfSubsequences([3, 4, 3, 4, 3, 4, 3, 4]))      # 3