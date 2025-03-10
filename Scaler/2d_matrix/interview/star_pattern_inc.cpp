#include <iostream>
using namespace std;

void starPattern(int n) {
    int strLength = n * 2;
    for (int i = 0; i < n * 2; i++) {
        for (int j = 0; j < strLength; j++) {
            if (i < n) {
                // Top half
                if (i == 0) {
                    cout << "*";
                } else {
                    if (j >= n - i && j <= n + i - 1) {
                        cout << " ";
                    } else {
                        cout << "*";
                    }
                }
            } else {
                // Bottom half
                if (i == strLength - 1) {
                    cout << "*";
                } else {
                    if (j >= i - n + 1 && j < strLength - (i - n + 1)) {
                        cout << " ";
                    } else {
                        cout << "*";
                    }
                }
            }
        }
        cout << endl;
    }
}

int main() {
    starPattern(4);
    // starPattern(6);
    return 0;
}
