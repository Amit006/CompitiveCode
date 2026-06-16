/*
 * Definition for a binary tree node.
 * 
 */

function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
}
 
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestConsecutive = function (root) {
    let pLen = 0, head = root;


    const DFS = (root, preVal, count) => {
        if (!root) return count

        const newVal = (root.val - preVal == 1) ? count+=1 : 1;

        return Math.max(newVal,
            DFS(root.left, root.val, newVal),
            DFS(root.right, root.val, newVal)
        );

    }


    return DFS(root, root.val, 1)
};


console.log(
    longestConsecutive(
        new TreeNode(1, new TreeNode(2, new TreeNode(3)), new TreeNode(4)),
    ),
); // Output: 3