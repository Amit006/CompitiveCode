var getResults = function(queries) {
    const MAX = 50001; // x <= 5*10^4 per constraints

    // ── Tree 1: max-gap tree ──────────────────────────────────────────────
    // gap[x] = distance from the previous obstacle to obstacle at x
    // Supports: point update, range-max query
    const gapTree = new Int32Array(4 * MAX);

    function gapUpdate(node, l, r, pos, val) {
        if (l === r) { gapTree[node] = val; return; }
        const mid = (l + r) >> 1;
        if (pos <= mid) gapUpdate(node * 2, l, mid, pos, val);
        else            gapUpdate(node * 2 + 1, mid + 1, r, pos, val);
        gapTree[node] = Math.max(gapTree[node * 2], gapTree[node * 2 + 1]);
    }

    function gapQuery(node, l, r, ql, qr) {
        if (qr < l || ql > r) return 0;
        if (ql <= l && r <= qr) return gapTree[node];
        const mid = (l + r) >> 1;
        return Math.max(
            gapQuery(node * 2, l, mid, ql, qr),
            gapQuery(node * 2 + 1, mid + 1, r, ql, qr)
        );
    }

    // ── Tree 2: obstacle presence tree (OR aggregation) ──────────────────
    // obsTree[node] = 1 if any obstacle exists in this subtree's range
    // Supports: point insert, findFloor (rightmost in range), findSuccessor (leftmost in range)
    const obsTree = new Uint8Array(4 * MAX);

    function obsInsert(node, l, r, pos) {
        if (l === r) { obsTree[node] = 1; return; }
        const mid = (l + r) >> 1;
        if (pos <= mid) obsInsert(node * 2, l, mid, pos);
        else            obsInsert(node * 2 + 1, mid + 1, r, pos);
        obsTree[node] = obsTree[node * 2] | obsTree[node * 2 + 1];
    }

    // Rightmost obstacle in [ql, qr], or -1
    function findFloor(node, l, r, ql, qr) {
        if (qr < l || ql > r || !obsTree[node]) return -1;
        if (l === r) return l;
        const mid = (l + r) >> 1;
        // Try right subtree first — we want the LARGEST position
        const right = findFloor(node * 2 + 1, mid + 1, r, ql, qr);
        if (right !== -1) return right;
        return findFloor(node * 2, l, mid, ql, qr);
    }

    // Leftmost obstacle in [ql, qr], or -1
    function findSuccessor(node, l, r, ql, qr) {
        if (qr < l || ql > r || !obsTree[node]) return -1;
        if (l === r) return l;
        const mid = (l + r) >> 1;
        // Try left subtree first — we want the SMALLEST position
        const left = findSuccessor(node * 2, l, mid, ql, qr);
        if (left !== -1) return left;
        return findSuccessor(node * 2 + 1, mid + 1, r, ql, qr);
    }

    // ── Sentinel: implicit wall at position 0 ────────────────────────────
    obsInsert(1, 0, MAX - 1, 0);
    // gapUpdate at 0 left as 0 (no predecessor before the wall)

    const results = [];

    for (const q of queries) {
        if (q[0] === 1) {
            const x = q[1];

            // Find neighbours BEFORE inserting x
            const prev = findFloor    (1, 0, MAX-1, 0,   x - 1); // largest obstacle < x
            const next = findSuccessor(1, 0, MAX-1, x+1, MAX-1); // smallest obstacle > x

            obsInsert (1, 0, MAX-1, x);
            gapUpdate (1, 0, MAX-1, x, x - prev);          // new gap at x

            if (next !== -1)
                gapUpdate(1, 0, MAX-1, next, next - x);    // shrink gap at next
        } else {
            const x = q[1], sz = q[2];

            // Stored max = best gap between two consecutive obstacles both ≤ x
            const storedMax = gapQuery(1, 0, MAX-1, 0, x);

            // Tail gap = distance from last obstacle ≤ x up to the boundary x
            const lastObs = findFloor(1, 0, MAX-1, 0, x);
            const tailGap = x - lastObs;

            results.push(Math.max(storedMax, tailGap) >= sz);
        }
    }

    return results;
};


console.log(getResults([[1, 2], [1, 4], [2, 5, 2], [1, 7], [2, 6, 3]])); // [true, false]   
console.log(getResults([[1, 2], [1, 4], [2, 5, 3], [1, 7], [2, 6, 3]])); // [false, false]