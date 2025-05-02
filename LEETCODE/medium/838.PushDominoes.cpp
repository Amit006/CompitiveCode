#include <vector>
#include <string>

using namespace std;

string pushDominoes(string dominoes) {
    int n = dominoes.size();
    vector<int> forceR(n, n + 1);
    vector<int> forceL(n, n + 1);
    
    int current_force = 0;
    for (int i = 0; i < n; ++i) {
        if (dominoes[i] == 'R') {
            current_force = 1;
        } else if (dominoes[i] == 'L') {
            current_force = 0;
        } else {
            if (current_force > 0) {
                forceR[i] = current_force;
                current_force++;
            } else {
                current_force = 0;
            }
        }
    }
    
    current_force = 0;
    for (int i = n - 1; i >= 0; --i) {
        if (dominoes[i] == 'L') {
            current_force = 1;
        } else if (dominoes[i] == 'R') {
            current_force = 0;
        } else {
            if (current_force > 0) {
                forceL[i] = current_force;
                current_force++;
            } else {
                current_force = 0;
            }
        }
    }
    
    string res = dominoes;
    for (int i = 0; i < n; ++i) {
        if (res[i] == '.') {
            if (forceR[i] < forceL[i]) {
                res[i] = 'R';
            } else if (forceL[i] < forceR[i]) {
                res[i] = 'L';
            } else {
                res[i] = '.';
            }
        }
    }
    
    return res;
}



static main() {
    string dominoes = "RR.L";
    string result = pushDominoes(dominoes);
    cout << result << endl; // Output: "RR.L"
    return 0;
}


/*

838. Push Dominoes
Solved
Medium
Topics
Companies
There are n dominoes in a line, and we place each domino vertically upright. In the beginning, we simultaneously push some of the dominoes either to the left or to the right.

After each second, each domino that is falling to the left pushes the adjacent domino on the left. Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.

When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.

For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.

You are given a string dominoes representing the initial state where:

dominoes[i] = 'L', if the ith domino has been pushed to the left,
dominoes[i] = 'R', if the ith domino has been pushed to the right, and
dominoes[i] = '.', if the ith domino has not been pushed.
Return a string representing the final state.

 

Example 1:

Input: dominoes = "RR.L"
Output: "RR.L"
Explanation: The first domino expends no additional force on the second domino.
Example 2:


Input: dominoes = ".L.R...LR..L.."
Output: "LL.RR.LLRRLL.."
 

Constraints:

n == dominoes.length
1 <= n <= 105
dominoes[i] is either 'L', 'R', or '.'.


*/