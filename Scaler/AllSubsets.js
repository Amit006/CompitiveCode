const allSubsets = (A) => {
    A.sort((a, b) => a - b);
    let result = [];

    const dfs = (index, path) => {
        result.push([...path]);

        for (let i = index; i < A.length; i++) {
            path.push(A[i]);
            dfs(i + 1, path);
            path.pop();
        }
    };

    dfs(0, []);

    // Pure lexicographic sort: compare element by element, empty subset first
    result.sort((a, b) => {
        const len = Math.min(a.length, b.length);
        for (let i = 0; i < len; i++) {
            if (a[i] !== b[i]) return a[i] - b[i];
        }
        return a.length - b.length; // shorter subset comes first if it's a prefix
    });

    return result;
};

console.log(allSubsets([9, -20, -11, -8, -4, 4, -12, 14, 1, -18]));