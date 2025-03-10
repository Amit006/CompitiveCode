#include <iostream>
#include <vector>
using namespace std;

class Solution {
    public:
        bool check(vector<int>& nums) {
            int count=0, n = nums.size();
            for (int i = 0; i < n; i++) {
                if (nums[i] > nums[(i + 1) % n]) {
                    count++;
                    if (count > 1) {
                        return false;
                    }
                }
            }
            return count <= 1;
        }
};

int main() {
    Solution sol;
    vector<int> nums = {3, 4, 5, 1, 2};
    vector<int> nums1 = {2,1,3,4};
    vector<int> nums2 = {1,2,3};
    cout << (sol.check(nums) ? "True" : "False") << endl;
    cout << (sol.check(nums1) ? "True" : "False") << endl;
    cout << (sol.check(nums2) ? "True" : "False") << endl;
    return 0;
}