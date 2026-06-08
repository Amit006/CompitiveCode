/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

var createBinaryTree = function (descriptions) {
    const nodes = new Map();
    const children = new Set();
    const getNode = (val) => {
        if (!nodes.has(val)) nodes.set(val, new TreeNode(val, null, null));
        return nodes.get(val);
    };

    for (const [parent, child, isLeft] of descriptions) {
        const p = getNode(parent),
            c = getNode(child);
        if (isLeft) p.left = c;
        else p.right = c;
        children.add(child);
    }

    // inline: instead of scanning nodes, just check parents
    for (const [parent] of descriptions) {
        if (!children.has(parent)) return nodes.get(parent);
    }
    return null;
};

console.log(
    createBinaryTree([
        [20, 15, 1],
        [20, 17, 0],
        [50, 20, 1],
        [50, 80, 0],
        [80, 19, 1],
    ]),
);
console.log(
    createBinaryTree([
        [1, 2, 1],
        [2, 3, 0],
        [3, 4, 1],
    ]),
);

// Optimization: we can avoid scanning the nodes map at the end by keeping track of the parents in a set. Then we can just check which parent is not a child to find the root. This reduces the time complexity from O(n) to O(1) for finding the root.

const createBinaryTreeOptimized = function (A) {
    const nodes = new Map();
    let root = 0;

    for (const [x, y, isLeft] of A) {
        if (!nodes.has(x)) {
            nodes.set(x, new TreeNode(x));
            root ^= x;
        }
        if (!nodes.has(y)) {
            nodes.set(y, new TreeNode(y));
            root ^= y;
        }

        if (isLeft) nodes.get(x).left = nodes.get(y);
        else nodes.get(x).right = nodes.get(y);

        root ^= y;
    }

    return nodes.get(root);
};

console.log(
    createBinaryTreeOptimized([
        [20, 15, 1],
        [20, 17, 0],
        [50, 20, 1],
        [50, 80, 0],
        [80, 19, 1],
    ]),
);
console.log(
    createBinaryTreeOptimized([
        [1, 2, 1],
        [2, 3, 0],
        [3, 4, 1],
    ]),
);
