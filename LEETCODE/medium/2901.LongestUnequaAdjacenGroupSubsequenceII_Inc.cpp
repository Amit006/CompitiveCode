#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

class Solution {
public:
    int hammingDistance(const string& s1, const string& s2) {
        if (s1.length() != s2.length()) {
            return -1;
        }
        int distance = 0;
        for (size_t i = 0; i < s1.length(); ++i) {
            if (s1[i] != s2[i]) {
                distance++;
            }
        }
        return distance;
    }

    vector<string> longestSubsequence(vector<string>& words, vector<int>& groups) {
        int n = words.size();
        if (n == 0) {
            return {};
        }

        vector<pair<vector<int>, int>> dp(n); // {indices, length}
        int maxLen = 1;
        vector<int> longestIndices = {0};

        for (int i = 0; i < n; ++i) {
            dp[i] = {{i}, 1};
            for (int j = 0; j < i; ++j) {
                if (groups[i] != groups[j] && words[i].length() == words[j].length() && hammingDistance(words[i], words[j]) == 1) {
                    if (dp[j].second + 1 > dp[i].second) {
                        dp[i].first = dp[j].first;
                        dp[i].first.push_back(i);
                        dp[i].second = dp[j].second + 1;
                        if (dp[i].second > maxLen) {
                            maxLen = dp[i].second;
                            longestIndices = dp[i].first;
                        }
                    }
                }
            }
            if (dp[i].second > maxLen) {
                maxLen = dp[i].second;
                longestIndices = dp[i].first;
            }
        }

        vector<string> result;
        for (int index : longestIndices) {
            result.push_back(words[index]);
        }

        if (result.empty() && !words.empty()) {
            return {words[0]};
        }

        return result;
    }
};

int main() {
    Solution sol;
    vector<string> words1 = {"bab", "dab", "cab"};
    vector<int> groups1 = {1, 2, 2};
    vector<string> result1 = sol.longestSubsequence(words1, groups1);
    cout << "Longest subsequence 1: ";
    for (const string& s : result1) {
        cout << s << " ";
    }
    cout << endl;

    vector<string> words2 = {"a", "b", "c", "d"};
    vector<int> groups2 = {1, 2, 3, 4};
    vector<string> result2 = sol.longestSubsequence(words2, groups2);
    cout << "Longest subsequence 2: ";
    for (const string& s : result2) {
        cout << s << " ";
    }
    cout << endl;

    return 0;
}