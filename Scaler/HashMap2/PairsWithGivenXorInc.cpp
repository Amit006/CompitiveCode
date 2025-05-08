#include <iostream>
#include <vector>
#include <algorithm>
#include<unordered_map>

using namespace std;

class Solution {
    public:
        int pairsWithGivenXor(vector<int>& nums, int n, int b) {
            unordered_map<int, int> freqMap;
            int count = 0;
            for (int num : nums) {
                int target = num ^ b; // XOR with b to find the target
                if (freqMap.find(target) != freqMap.end()) {
                    count += freqMap[target]; // Count pairs that satisfy the XOR condition
                }
                freqMap[num]++;
            }
            return count;
        }
    };

int main() {
    Solution sol;
    vector<int> nums1 = {5, 4, 10, 15, 7, 6};
    int b = 5; // Example XOR value
    cout << sol.pairsWithGivenXor(nums1, nums1.size(),b ) << endl; // Output: 2

    vector<int> nums2 = {3, 6, 8, 10, 15, 50};
    int b2 = 5;
    cout << sol.pairsWithGivenXor(nums2, nums2.size(), b2) << endl; // Output: 1

    return 0;
}
