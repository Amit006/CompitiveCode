#include <iostream>
#include <vector>
using namespace std;

class Solution {
    public:
        int removeDuplicates(vector<int>& nums) {
            int count = 1;
            for(int i =1;i < nums.size();i++){
               if (nums[i] != nums[i-1]){
                    nums[count] = nums[i];
                    count++; 
               } 
            }
            return count;
        }
    };

int main() {
    Solution solution;
    vector<int> nums = {1, 1, 1,1,1,2};
    int newLength = solution.removeDuplicates(nums);
    cout << "New length: " << newLength << endl;
    cout << "Modified array: ";
    for (int i = 0; i < newLength; i++) {
        cout << nums[i] << " ";
    }
    cout << endl;
    return 0;
}