const {Tree} = require("./Traversal.js");
const assert = require("assert");
class IdenticalBinaryTree {
  constructor(tree1, tree2) {
    this.tree1 = tree1;
    this.tree2 = tree2;
  }

  isIdentical() {
    return this._isIdentical(this.tree1.root, this.tree2.root);
  }

  _isIdentical(node1, node2) {
    if (node1 === null && node2 === null) {
      return true;
    }
    if (node1 === null || node2 === null) {
      return false;
    }
    return (
      node1.val === node2.val &&
      this._isIdentical(node1.left, node2.left) &&
      this._isIdentical(node1.right, node2.right)
    );
  }
}


/*
Input 1:

   1       1
  / \     / \
 2   3   2   3
Input 2:

   1       1
  / \     / \
 2   3   3   3
*/

// Example usage:
const tree1 = new Tree();
tree1.insert(1);
tree1.insert(2, true);
tree1.insert(3, false);
const tree2 = new Tree();
tree2.insert(1);
tree2.insert(2, true);
tree2.insert(3, false);
const identicalBinaryTree = new IdenticalBinaryTree(tree1, tree2);
assert.strictEqual(identicalBinaryTree.isIdentical(), true);
console.log(identicalBinaryTree.isIdentical()); // Output: true


// input2
const tree3 = new Tree();
tree3.insert(1);
tree3.insert(2, true);
tree3.insert(3, false);
const tree4 = new Tree();
tree4.insert(1);
tree4.insert(3, true);
tree4.insert(3, false);
const identicalBinaryTree2 = new IdenticalBinaryTree(tree3, tree4);
assert.strictEqual(identicalBinaryTree2.isIdentical(), false);
console.log(identicalBinaryTree2.isIdentical()); // Output: false