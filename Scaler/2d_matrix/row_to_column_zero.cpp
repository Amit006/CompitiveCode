#include <iostream>
#include <vector>

using namespace std;

vector<vector<int>> rowToColumnZero(vector<vector<int>>& A) {
    if (A.empty() || A[0].empty()) {
        return {};
    }

    int n = A.size();
    int m = A[0].size();
    vector<bool> rows(n, false);
    vector<bool> cols(m, false);

    // First pass to find all rows and columns that need to be zeroed
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < m; ++j) {
            if (A[i][j] == 0) {
                rows[i] = true;
                cols[j] = true;
            }
        }
    }

    // Second pass to set the rows and columns to zero
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < m; ++j) {
            if (rows[i] || cols[j]) {
                A[i][j] = 0;
            }
        }
    }

    return A;
}

int main() {
    vector<vector<int>> E = {
        {97, 18, 55, 1, 50, 17, 16, 0, 22, 14},
        {58, 14, 75, 54, 11, 23, 54, 95, 33, 23},
        {73, 11, 2, 80, 6, 43, 67, 82, 73, 4},
        {61, 22, 23, 68, 23, 73, 85, 91, 25, 7},
        {6, 83, 22, 81, 89, 85, 56, 43, 32, 89},
        {0, 6, 1, 69, 86, 7, 64, 5, 90, 37},
        {10, 3, 11, 33, 71, 86, 6, 56, 78, 31},
        {16, 36, 66, 90, 17, 55, 27, 26, 99, 59},
        {67, 18, 65, 68, 87, 3, 28, 52, 9, 70},
        {41, 19, 73, 5, 52, 96, 91, 10, 52, 21}
    };

    vector<vector<int>> result = rowToColumnZero(E);

    for (const auto& row : result) {
        for (int val : row) {
            cout << val << " ";
        }
        cout << endl;
    }

    return 0;
}


/*
Row to Column Zero

Problem Description :- 

You are given a 2D integer matrix A, make all the elements in a row or column zero if the A[i][j] = 0. Specifically, make entire ith row and jth column zero.



Problem Constraints

1 <= A.size() <= 103

1 <= A[i].size() <= 103

0 <= A[i][j] <= 103



Input Format

First argument is a 2D integer matrix A.



Output Format

Return a 2D matrix after doing required operations.



Example Input

Input 1:

[1,2,3,4]
[5,6,7,0]
[9,2,0,4]


Example Output

Output 1:

[1,2,0,0]
[0,0,0,0]
[0,0,0,0]


Example Explanation

Explanation 1:

A[2][4] = A[3][3] = 0, so make 2nd row, 3rd row, 3rd column and 4th column zero.
*/