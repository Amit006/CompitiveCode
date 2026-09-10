/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function (root) {
    let resultCount = 0;

    const DFS = (node, count) => {
        // Base case: an empty node adds 0 to the sum and 0 to the count
        if (!node) return { sum: 0, count: 0 };

        // Recursively get the sum and count of the left and right subtrees
        const left = DFS(node.left);
        const right = DFS(node.right);

        // Calculate total sum and total count for the current subtree
        const currentSum = node.val + left.sum + right.sum;
        const currentCount = 1 + left.count + right.count;

        // Calculate the average (rounded down, as per the problem description)
        const currentAvg = Math.floor(currentSum / currentCount);

        if (currentAvg === node.val) resultCount++;

        // Return the stats upward so the parent node can use them
        return { sum: currentSum, count: currentCount };
    }
    // Start the traversal from the root
    DFS(root);

    return resultCount;
};


console.log(averageOfSubtree({
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}));    


console.log(averageOfSubtree({
    val: 1,
    left: { 
         val: 2,
            left: {
                val: 4,
                left: null,
                right: null
            },
            right: {
                val: 5,
                left: null,
                right: null
            }
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}));    