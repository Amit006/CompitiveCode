

const factorialNumber = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    return  factorialNumber(n - 1) * n;
}