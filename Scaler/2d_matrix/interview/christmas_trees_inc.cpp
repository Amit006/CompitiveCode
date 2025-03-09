#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>

using namespace std;

int christmasTrees(vector<int>& A, vector<int>& B) {
    int smallestSum = INT_MAX;

    for (int j = 1; j < A.size() - 1; j++) {
        int leftMin = INT_MAX;
        int rightMin = INT_MAX;

        for (int i = 0; i < j; i++) {
            if (A[i] < A[j]) {
                leftMin = min(leftMin, B[i]);
            }
        }

        for (int k = j + 1; k < A.size(); k++) {
            if (A[k] > A[j]) {
                rightMin = min(rightMin, B[k]);
            }
        }

        if (leftMin != INT_MAX && rightMin != INT_MAX) {
            smallestSum = min(smallestSum, B[j] + leftMin + rightMin);
        }
    }

    return smallestSum == INT_MAX ? -1 : smallestSum;
}

int main() {
    vector<int> A1 = {1, 6, 4, 2, 6, 9};
    vector<int> B1 = {2, 5, 7, 3, 2, 7};
    cout << christmasTrees(A1, B1) << endl; // 14

    vector<int> A2 = {5, 9, 10, 4, 7, 8};
    vector<int> B2 = {5, 6, 4, 7, 2, 5};
    cout << christmasTrees(A2, B2) << endl; // 14

    vector<int> A3 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    vector<int> B3 = {10, 13, 11, 14, 15, 12, 13, 13, 18, 13};
    cout << christmasTrees(A3, B3) << endl; // 36

    return 0;
}
