#include<bits/stdc++.h>
using namespace std;

int fun(int x, int n) {
    if (n == 0) return 1;
    else if (n%2 == 0) {
        return fun(x * x, n / 2);
    } else {
        return x * fun(x*x, (n - 1) / 2);
    }
}

int main() {
    int x = 2, n = 10;
    cout << fun(x, n) << endl; // Output: 8
    return 0;
}