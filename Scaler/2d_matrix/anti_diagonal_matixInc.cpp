#include <iostream>
#include <vector>
#include <algorithm> // For std::max

using namespace std;

vector<vector<int>> antiDiagonals(vector<vector<int>> A) {
    int N = A.size();
    if (N == 0) return {};
    int totalS = 2 * N - 1;
    vector<vector<int>> result(totalS, vector<int>(N, 0));
    
    for (int i = 0; i < N; ++i) {
        for (int j = 0; j < N; ++j) {
            int s = i + j;
            int start_i = max(0, s - (N - 1));
            int pos = i - start_i;
            result[s][pos] = A[i][j];
        }
    }
    
    return result;
}

int main() {
    vector<vector<int>> A = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    vector<vector<int>> result = antiDiagonals(A);
    for (auto row : result) {
        for (int x : row) {
            cout << x << " ";
        }
        cout << endl;
    }
    return 0;
}