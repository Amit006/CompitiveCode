// Tree node definition
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function levelOrder(root) {
  const res = [];
  if (!root) return res;
  const q = [root];
  while (q.length) {
    const levelSize = q.length;
    const level = [];
    for (let i = 0; i < levelSize; i++) {
      const node = q.shift();
      level.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    res.push(level);
  }
  return res;
}

function levelOrderDFSFaster(root) {
  if (!root) return [];

  const res = [];
  const q = [root];

  while (q.length) {
    const levelSize = q.length;
    const level = [];
    for (let i = 0; i < levelSize; i++) {
      const node = q.shift();
      level.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }

    res.push(level);
  }

  return res;
}

// Example
//    3
//   / \
//  9  20
//    /  \
//   15   7
const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(levelOrder(root)); // [[3],[9,20],[15,7]]
console.log(levelOrderDFSFaster(root)); // [[3],[9,20],[15,7]]
