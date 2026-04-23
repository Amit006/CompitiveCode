#include <vector>
#include <string>
#include <iostream>

using namespace std;

class Solution {
public:
    string pushDominoes(string d) {
        int n = d.size();
        int prev = -1;
        char prevChar = 'L';

        for (int i = 0; i <= n; i++) {
            char curr = (i == n) ? 'R' : d[i];
            if (curr == '.') continue;

            if (prevChar == curr) {
                for (int k = prev + 1; k < i; k++) d[k] = curr;
            } else if (prevChar == 'R' && curr == 'L') {
                int lo = prev + 1, hi = i - 1;
                while (lo < hi) {
                    d[lo++] = 'R';
                    d[hi--] = 'L';
                }
            }
            // 'L' then 'R' → leave dots alone

            prev = i;
            prevChar = curr;
        }
        return d;
    }
};

int main() {
    Solution sol;
    string dominoes = "RR.L";
    string result = sol.pushDominoes(dominoes);
    cout << result << endl;   // Output: RR.L
    return 0;
}