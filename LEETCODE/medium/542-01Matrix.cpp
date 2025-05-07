/*
542. 01 Matrix
Solved
Medium
Topics
Companies
Given an m x n binary matrix mat, return the distance of the nearest 0 for each
cell.

The distance between two cells sharing a common edge is 1.



Example 1:


Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]
Example 2:


Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]
*/

#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
#include <climits>
using namespace std;

class Solution {
public:
    vector<vector<int>> updateMatrix(vector<vector<int>>& mat) {
        int m = mat.size(), n = mat[0].size();
        vector<vector<int>> dist(m, vector<int>(n, INT_MAX));
        queue<pair<int, int>> q;

        // Initialize the queue with all 0 cells and set their distance to 0
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (mat[i][j] == 0) {
                    dist[i][j] = 0;
                    q.push({i, j});
                }
            }
        }

        // Directions for moving up, down, left, right
        vector<pair<int, int>> directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

        // BFS to find the nearest 0 for each cell
        while (!q.empty()) {
            auto [x, y] = q.front();
            q.pop();

            for (auto [dx, dy] : directions) {
                int nx = x + dx, ny = y + dy;
                if (nx >= 0 && nx < m && ny >= 0 && ny < n &&
                    dist[nx][ny] > dist[x][y] + 1) {
                    dist[nx][ny] = dist[x][y] + 1;
                    q.push({nx, ny});
                }
            }
        }

        return dist;
    }

    vector<vector<int>> updateMatrixV2(vector<vector<int>>& mat) {
        int m = mat.size();
        int n = mat[0].size();
        vector<pair<int, int>> move = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        queue<pair<pair<int, int>, int>> q;
        vector<vector<int>> visited(m, vector<int>(n, -1));
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (mat[i][j] == 0) {
                    q.push({{i, j}, 0});
                    visited[i][j] = 0;
                }
            }
        }
        while (!q.empty()) {
            auto [p, level] = q.front();
            int x = p.first;
            int y = p.second;
            q.pop();
            for (int i = 0; i < 4; i++) {
                int c = x + move[i].first;
                int d = y + move[i].second;
                if (c >= 0 && c < m && d >= 0 && d < n && visited[c][d] == -1) {
                    visited[c][d] = level + 1;
                    q.push({{c, d}, level + 1});
                }
            }
        }
        return visited;
    }

    // Display function
    void displayMatrix(const vector<vector<int>>& matrix) {
        for (const auto& row : matrix) {
            for (const auto& cell : row) {
                cout << cell << " ";
            }
            cout << endl;
        }
        cout << endl;
    }
};

int main() {
    Solution solution;
    vector<vector<int>> mat1 = {{0, 0, 0}, {0, 1, 0}, {0, 0, 0}};
    vector<vector<int>> mat2 = {{0, 0, 0}, {0, 1, 0}, {1, 1, 1}};
    vector<vector<int>> mat3 = {{1, 0, 0}, {1, 1, 0}, {1, 1, 1}};

    cout << "Result using updateMatrix:" << endl;
    vector<vector<int>> result1 = solution.updateMatrix(mat1);
    solution.displayMatrix(result1);

    vector<vector<int>> result2 = solution.updateMatrix(mat2);
    solution.displayMatrix(result2);

    vector<vector<int>> result3 = solution.updateMatrix(mat3);
    solution.displayMatrix(result3);

    cout << "Result using updateMatrixV2:" << endl;
    vector<vector<int>> result4 = solution.updateMatrixV2(mat1);
    solution.displayMatrix(result4);

    vector<vector<int>> result5 = solution.updateMatrixV2(mat2);
    solution.displayMatrix(result5);

    vector<vector<int>> result6 = solution.updateMatrixV2(mat3);
    solution.displayMatrix(result6);

    return 0;
}

// Time Complexity: O(m * n), where m is the number of rows and n is the number
// of columns in the matrix.
// Space Complexity: O(m * n) in the worst case for both methods due to the queue and the distance/visited matrix.