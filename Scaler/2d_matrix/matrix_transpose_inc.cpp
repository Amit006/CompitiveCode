#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

vector<vector<int>> matrixTranspose(const vector<vector<int>>& A) {
    if (A.empty()) {
        return {};
    }
    
    int originalRows = A.size();
    int originalCols = A[0].size();
    
    // Create a transposed matrix with dimensions originalCols x originalRows
    vector<vector<int>> transposed(originalCols, vector<int>(originalRows));
    
    for (int i = 0; i < originalRows; ++i) {
        for (int j = 0; j < originalCols; ++j) {
            transposed[j][i] = A[i][j];
        }
    }
    
    return transposed;
}

int main() {
    vector<vector<int>> A = {{1, 2, 3}, {4, 5, 6}};
    vector<vector<int>> result = matrixTranspose(A);
    
    // Print result
    for (const auto& row : result) {
        for (int val : row) {
            cout << val << " ";
        }
        cout << endl;
    }
    
    return 0;
}