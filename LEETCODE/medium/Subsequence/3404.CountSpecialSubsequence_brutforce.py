from typing import List

class Solution:
    def numberOfSubsequences(self, nums: List[int]) -> int:
        n = len(nums)
        count = 0

        # p < q < r < s, with gap of at least 2 between each
        for p in range(n - 6):
            for q in range(p + 2, n - 4):
                for r in range(q + 2, n - 2):
                    for s in range(r + 2, n):
                        if nums[p] * nums[r] == nums[q] * nums[s]:
                            count += 1

        return count


# Tests
print(Solution().numberOfSubsequences([1, 2, 3, 4, 3, 6, 1]))         # 1
print(Solution().numberOfSubsequences([3, 4, 3, 4, 3, 4, 3, 4]))      # 3