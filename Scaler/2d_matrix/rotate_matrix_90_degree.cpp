#include <iostream>
#include <vector>

using namespace std;

void rotateMatrix(vector<vector<int>>& A) {
    int n = A.size();
    // Transpose the matrix
    for (int i = 0; i < n; ++i) {
        for (int j = i; j < n; ++j) {
            swap(A[i][j], A[j][i]);
        }
    }
    // Reverse each row
    for (int i = 0; i < n; ++i) {
        reverse(A[i].begin(), A[i].end());
    }
}

void printMatrix(const vector<vector<int>>& A) {
    for (const auto& row : A) {
        for (int val : row) {
            cout << val << " ";
        }
        cout << endl;
    }
}

int main() {
    vector<vector<int>> Input1 = {
        {1, 2},
        {3, 4}
    };
    vector<vector<int>> Input2 = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    rotateMatrix(Input1);
    printMatrix(Input1); // Output: 3 1 4 2

    rotateMatrix(Input2);
    printMatrix(Input2); // Output: 7 4 1 8 5 2 9 6 3

    return 0;
}


/* 
Rotate Matrix

Problem Description :- 

You are given a n x n 2D matrix A representing an image.

Rotate the image by 90 degrees (clockwise).

You need to do this in place.

Note: If you end up using an additional array, you will only receive partial score.



Problem Constraints

1 <= n <= 1000



Input Format

First argument is a 2D matrix A of integers



Output Format

Return the 2D rotated matrix.



Example Input

Input 1:

 [
    [1, 2],
    [3, 4]
 ]
Input 2:

 [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
 ]


Example Output

Output 1:

 [
    [3, 1],
    [4, 2]
 ]
Output 2:

 [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
 ]


Example Explanation

Explanation 1:

 After rotating the matrix by 90 degree:
 1 goes to 2, 2 goes to 4
 4 goes to 3, 3 goes to 1
Explanation 2:

 After rotating the matrix by 90 degree:
 1 goes to 3, 3 goes to 9
 2 goes to 6, 6 goes to 8
 9 goes to 7, 7 goes to 1
 8 goes to 4, 4 goes to 2
 
 */