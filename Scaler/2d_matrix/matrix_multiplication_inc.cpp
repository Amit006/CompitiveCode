#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<vector<int>> matrixUltiplication(vector<vector<int>> A, vector<vector<int>> B)
{
  int N = A.size();
  if (N == 0)
    return {};
  int columnLen = B.size();
  vector<vector<int>> result(N, vector<int>(columnLen, 0));

  for (int i = 0; i < N; i++){
    for (int j = 0; j < B.size(); j++){
      for (int k = 0; k < B[0].size(); k++)
      {
        result[i][k] += A[i][j] * B[j][k];
      }
    }
  }

  return result;
}

int main()
{
  vector<vector<int>> A = {{1, 2}, {3, 4}};
  vector<vector<int>> B = {{5, 6}, {7, 8}};

  vector<vector<int>> result = matrixUltiplication(A, B);
  for (auto item : result)
  {
    for (auto i : item)
    {
      cout << i << " ";
    }
  }
  cout << endl;
  return 0;
}



/*

Problem Description
You are given two integer matrices A(having M X N size) and B(having N X P). You have to multiply matrix A with B and return the resultant matrix. (i.e. return the matrix AB).
*/