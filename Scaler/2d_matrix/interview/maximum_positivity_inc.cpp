#include <iostream>
#include <vector>

using namespace std;

vector<int> maximumPositivity(vector<int> &A)
{
    int maxLen = 0;
    int currentLen = 0;
    int start = 0;
    int maxStart = 0;

    for (int i = 0; i < A.size(); i++)
    {
        if (A[i] > 0)
        {
            if (currentLen == 0)
            {
                start = i;
            }
            currentLen++;
            if (currentLen > maxLen)
            {
                maxLen = currentLen;
                maxStart = start;
            }
        }
        else
        {
            currentLen = 0;
        }
    }

    return vector<int>(A.begin() + maxStart, A.begin() + maxStart + maxLen);
}

int main()
{
    vector<int> A1 = {1, 2, 5, -7, 2, 3};
    vector<int> A2 = {1, 2, 3, 4, 5, 6};
    vector<int> A3 = {-1, -2, -3, -4};
    vector<int> A4 = {1, 2, -1, 2, 3, 4, -5, 6, 7};

    auto printResult = [](const vector<int> &result)
    {
        for (int num : result)
        {
            cout << num << " ";
        }
        cout << endl;
    };

    cout << "Input 1: A = {1, 2, 5, -7, 2, 3}, Output 1: ";
    printResult(maximumPositivity(A1));

    cout << "Input 2: A = {1, 2, 3, 4, 5, 6}, Output 2: ";
    printResult(maximumPositivity(A2));

    cout << "Input 3: A = {-1, -2, -3, -4}, Output 3: ";
    printResult(maximumPositivity(A3));

    cout << "Input 4: A = {1, 2, -1, 2, 3, 4, -5, 6, 7}, Output 4: ";
    printResult(maximumPositivity(A4));

    return 0;
}

/*

1. Maximum positivity

Problem Description

Given an array of integers A, of size N.




Return the maximum size subarray of A having only non-negative elements. If there are more than one such subarray, return the one having the smallest starting index in A.

NOTE: It is guaranteed that an answer always exists.



Problem Constraints

1 <= N <= 105




-109 <= A[i] <= 109






Input Format

The first and only argument given is the integer array A.



Output Format

Return maximum size subarray of A having only non-negative elements. If there are more than one such subarrays, return the one having earliest starting index in A.



Example Input

Input 1:




 A = [5, 6, -1, 7, 8]


Input 2:

 A = [1, 2, 3, 4, 5, 6]







Example Output

Output 1:




 [5, 6]


Output 2:

 [1, 2, 3, 4, 5, 6]







Example Explanation

Explanation 1:




 There are two subarrays of size 2 having only non-negative elements.
 1. [5, 6]  starting point  = 0
 2. [7, 8]  starting point  = 3
 As starting point of 1 is smaller, return [5, 6]


Explanation 2:

 There is only one subarray of size 6 having only non-negative elements:
 [1, 2, 3, 4, 5, 6]



*/