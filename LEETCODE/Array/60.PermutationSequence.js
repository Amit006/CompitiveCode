/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    const sequence = [];

    const generate = (start, path) => {
        if (sequence.length === k) return;

        if (path.length === n) {
            sequence.push([...path].join(""));
            return;
        }

        for (let i = start; i <= n; i++) {
            if (path.includes(i)) continue;
            path.push(i);
            generate(start, path);
            path.pop();
            
        }
    };

    generate(1, []);
    return sequence[k - 1];
};

// console.log(getPermutation(3, 3));


// Optimized solution using factorial number system O(n)
var getPermutationOptimized = function (n, k) {
    const factorial = [1], numbers = [];
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
        factorial[i] = factorial[i - 1] * i;
    }

    k--; // Convert k to 0-based index
    let result = '';

    for (let i = 0; i < n; i++) {
       const f = factorial[i - 1];       // (i-1)! permutations per leading digit
        const idx = Math.floor(k / f);    // which remaining digit to pick
        result += digits[idx];
        digits.splice(idx, 1);            // remove it — can't reuse
        k %= f;                           // narrow down k within the remaining block
    }

    return result; 
}


// now O(log n) using segment tree or fenwick tree to find the k-th smallest number in the remaining numbers.
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    // Fenwick tree, 1-indexed, size n
    const tree = new Array(n + 1).fill(0);

    function update(i, delta) {
        for (; i <= n; i += i & (-i)) tree[i] += delta;
    }

    function prefixSum(i) {
        let sum = 0;
        for (; i > 0; i -= i & (-i)) sum += tree[i];
        return sum;
    }

    // Initialize: every digit 1..n is available
    for (let i = 1; i <= n; i++) update(i, 1);

    // Find the smallest index whose prefix sum equals `target`
    // (i.e., the position of the target-th unused digit), via binary lifting
    function findKth(target) {
        let pos = 0;
        let remaining = target;
        let logN = Math.floor(Math.log2(n)) + 1;

        for (let pw = 1 << logN; pw > 0; pw >>= 1) {
            if (pos + pw <= n && tree[pos + pw] < remaining) {
                pos += pw;
                remaining -= tree[pos];
            }
        }
        return pos + 1; // the actual digit
    }

    const factorial = [1];
    for (let i = 1; i <= n; i++) factorial.push(factorial[i - 1] * i);

    console.log(factorial);
    
    k -= 1; // 0-indexed
    let result = "";

    for (let i = n; i >= 1; i--) {
        const f = factorial[i - 1];
        const idx = Math.floor(k / f) + 1; // 1-indexed rank among remaining digits
        const digit = findKth(idx);
        result += digit;
        update(digit, -1); // mark as used
        k %= f;
    }

    return result;
};


console.log(getPermutation(3, 3));

