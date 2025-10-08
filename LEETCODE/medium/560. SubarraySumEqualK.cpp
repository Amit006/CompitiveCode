#include<iostream>
#include<vector>
#include<unordered_map>
using namespace std;

class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        int sum = 0, count = 0;
        unordered_map<int, int> m1;
        m1[0]= 1;

        for (auto& num : nums) {
            sum += num;
            int remaining = sum - k;
            if (m1[remaining]) {
                count+= m1[remaining];
            }

            m1[sum]++;
        }
        return count;
    }

    int main() {
        vector<int> nums = {1, 2, 1, 2, 1};
        vector<int> nums2 = {1,2,3};
        
        int k = 3;
        cout << subarraySum(nums2, k) << endl;
        return 0;
    }
};