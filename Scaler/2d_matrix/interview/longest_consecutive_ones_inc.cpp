#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

int longestOnes(string A) {
    int n = A.length();
    int ones = count(A.begin(), A.end(), '1');
    int maxOnes = 0;

    for (int i = 0; i < n; i++) {
        if (A[i] == '0') {
            int leftOnes = 0;
            int rightOnes = 0;

            int tempLeft = i - 1;
            while (tempLeft >= 0 && A[tempLeft] == '1') {
                leftOnes++;
                tempLeft--;
            }

            int tempRight = i + 1;
            while (tempRight < n && A[tempRight] == '1') {
                rightOnes++;
                tempRight++;
            }

            // Calculate the maximum length of consecutive ones by swapping this '0'
            maxOnes = max(maxOnes, leftOnes + rightOnes + 1);
        }
    }

    if (A.find('0') == string::npos) {
        return ones;
    }

    return min(maxOnes, ones);
}

int main() {
    string A11 = "111000";
    string A22 = "111011101";
    string A33 = "111111111";
    string A44 = "1101101111111111";

    cout << "Input 1: A = " << A11 << ", Output 1: " << longestOnes(A11) << endl;
    cout << "Input 2: A = " << A22 << ", Output 2: " << longestOnes(A22) << endl;
    cout << "Input 3: A = " << A33 << ", Output 3: " << longestOnes(A33) << endl;
    cout << "Input 4: A = " << A44 << ", Output 4: " << longestOnes(A44) << endl;

    return 0;
}
