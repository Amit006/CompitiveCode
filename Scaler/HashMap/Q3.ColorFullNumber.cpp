#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int findNumbers(vector<int>& nums) {
        return count_if(nums.begin(), nums.end(), [](int num) {
            int digits = 0;
            int temp = num;
            while (temp > 0) {
                temp /= 10;
                digits++;
            }
            return (digits % 2 == 0 && digits > 0);
        });
    }
};

int main() {
    Solution sol;
    vector<int> nums1 = {12, 345, 2, 6, 7896};
    cout << sol.findNumbers(nums1) << endl; // Output: 2

    vector<int> nums2 = {555, 901, 482, 1771};
    cout << sol.findNumbers(nums2) << endl; // Output: 1

    vector<int> nums3 = {0};
    cout << sol.findNumbers(nums3) << endl; // Output: 0

    return 0;
}
