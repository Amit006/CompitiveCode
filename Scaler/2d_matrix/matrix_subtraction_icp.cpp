#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> subtractMatrices(const vector<vector<int>>& A, const vector<vector<int>>& B) {
    // Check if matrices have the same dimensions
    if (A.empty() || B.empty() || A.size() != B.size() || A[0].size() != B[0].size()) {
        return {};
    }

    int rows = A.size();
    int cols = A[0].size();
    vector<vector<int>> result(rows, vector<int>(cols, 0));

    // Subtract element-wise
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            result[i][j] = A[i][j] - B[i][j];
        }
    }

    return result;
}

int main() {
    vector<vector<int>> A1 = {{-5, 7}, {3, 1}, {4, -10}};
    vector<vector<int>> B1 = {{3, 4}, {2, 3}, {10, 1}};

    vector<vector<int>> result = subtractMatrices(A1, B1);

    // Print result
    for (const auto& row : result) {
        for (int val : row) {
            cout << val << " ";
        }
        cout << endl;
    }

    return 0;
}