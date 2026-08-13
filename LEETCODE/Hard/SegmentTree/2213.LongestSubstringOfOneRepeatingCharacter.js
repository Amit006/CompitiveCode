/**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */
var longestRepeating = function(s, queryCharacters, queryIndices ) {
    const n = s.length;
    const tree = new Array(4 * n).fill(null);

    const merge = (left, right) => {
        if (left === null) 
            return right;
        if (right === null) 
            return left;

        const [lc, lrc, llen, lp, ls, lb] = left;

        const [rlc, rc, rlen, rp, rs, rb] = right;

        const length = llen + rlen;

        let prefix = lp;

        if (lrc === rlc && lp === llen) {
            prefix = llen + rp;
        }

        let suffix = rs;

        if (lrc === rlc && rs === rlen) {
            suffix = rlen + ls;
        }

        let best = Math.max(lb, rb);

        if (lrc === rlc) {
            best = Math.max(best,ls + rp);
        }

        return [lc, rc, length, prefix, suffix, best];
    };

    const build = (node, start, end) => {
        if (start === end) {
            tree[node] = [s[start], s[start], 1, 1, 1, 1];
            return;
        }

        const mid = Math.floor(
            (start + end) / 2
        );

        build(node * 2, start, mid);
        build(node * 2 + 1, mid + 1, end);

        tree[node] = merge(tree[node * 2],tree[node * 2 + 1]
        );
    };

    const update = (node, start, end, index, char) => {
        if (start === end) {
            tree[node] = [char, char, 1, 1, 1, 1];
            return;
        }

        const mid = Math.floor(
            (start + end) / 2
        );

        if (index <= mid) {
            update(node * 2, start, mid, index, char );
        } else {
            update(node * 2 + 1, mid + 1, end, index, char);
        }

        tree[node] = merge(tree[node * 2], tree[node * 2 + 1]);
    };

    build(1, 0, n - 1);

    const answer = [];

    for (let i = 0; i < queryIndices.length; i++) {
        update( 1, 0, n - 1, queryIndices[i], queryCharacters[i]);
        answer.push(tree[1][5]);
    }

    return answer;
};

const s = "babacc";
const queryCharacters = "bcb";
const queryIndices = [1, 3, 3];

console.log(longestRepeating(s, queryCharacters, queryIndices)); // Output: [3, 3, 4]
console.log(longestRepeating("aaabaaa", "b", [3])); // Output: [6]