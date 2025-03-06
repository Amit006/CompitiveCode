#include <iostream>
#include <vector>

using namespace std;

vector<int> matrixSum(const vector<vector<int>>& A) {
    int n = A.size();
    int m = A[0].size();
    vector<int> resultMatrix(n, 0);
    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < m; ++j) {
            resultMatrix[i] += A[i][j];
        }
    }
    return resultMatrix;
}

void printVector(const vector<int>& vec) {
    for (int val : vec) {
        cout << val << " ";
    }
    cout << endl;
}

int main() {
    vector<vector<int>> Input1 = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 2, 3, 4}
    };
    vector<vector<int>> Input2 = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    vector<vector<int>> Input3 = {
        {1},
        {2},
        {3},
        {4}
    };

    printVector(matrixSum(Input1)); // Output: 10 26 18
    printVector(matrixSum(Input2)); // Output: 6 15 18
    printVector(matrixSum(Input3)); // Output: 1 2 3 4

    return 0;
}
