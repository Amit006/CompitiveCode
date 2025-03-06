#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> column_sum(vector<vector<int>> A)
{
  int N = A.size();
  if (N == 0)
    return {};
  int columnLen = A[0].size();
  vector<int> result(N);
  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < columnLen; j++)
    {
      result[j] = A[i][j];
    }
  }
  return result;
}

int main()
{
  vector<vector<int>> A = {
      {1, 2, 3, 4},
      {5, 6, 7, 8},
      {9, 2, 3, 4},
  };
  vector<int> result = column_sum(A);
  for (int item : result) {
    cout << item << endl;
  }
  cout << endl;
  return 0;
}