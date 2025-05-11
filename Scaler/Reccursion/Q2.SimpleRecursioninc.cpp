#include<bits/stdc++.h>
using namespace std;

int bar(int x, int y) {
    if (x == 0) return y;
    return bar(x, bar(x , y-1));
}

int foo(int x, int y) {
    if (y == 0) return 1;
    return bar(x, foo(x, y - 1));
}

int main() {
    int x = 2, y = 3;
    cout << foo(x, y) << endl; // Output: 8
    return 0;
}