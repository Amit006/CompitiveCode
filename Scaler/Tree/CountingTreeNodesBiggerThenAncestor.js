/*
Q2. Counting the Nodes
Solved
feature icon
Using hints except Complete Solution is Penalty free now
Use Hint
Problem Description

Given the root of a tree A with each node having a certain value, find the count of nodes with more value than all its ancestors.

Ancestor means that every node that occurs before the current node in the path from root to the node.




*/



const {Tree} = require("./Traversal.js");
const assert = require("assert");

class CountingTreeNodesBiggerThanAncestor {
  constructor(tree) {
    this.tree = tree;
    this.count = 0;
  }

  countNodesBiggerThanAncestors() {
    this._countNodes(this.tree.root, -Infinity);
    return this.count;
  }

  _countNodes(node, maxAncestorValue) {
    if (node === null) {
      return;
    }
    
    if (node.val > maxAncestorValue) {
      this.count++;
      maxAncestorValue = node.val;
    }
    
    this._countNodes(node.left, maxAncestorValue);
    this._countNodes(node.right, maxAncestorValue);
  }
}

/*
Example Input

Input 1:

 
     3
Input 2:

 
    4
   / \
  5   2
     / \
    3   6

*/

const tree1 = new Tree();
tree1.insert(3);
const countingTree1 = new CountingTreeNodesBiggerThanAncestor(tree1);
assert.strictEqual(countingTree1.countNodesBiggerThanAncestors(), 1);

const tree2 = new Tree();
tree2.insert(4);
tree2.insert(5, true);
tree2.insert(2, false); 
tree2._insert(tree2.root.right, 3, true); // to insert 3 as left child of 2
tree2._insert(tree2.root.right, 6, false); // to insert 6 as right child of 2
const countingTree2 = new CountingTreeNodesBiggerThanAncestor(tree2);
assert.strictEqual(countingTree2.countNodesBiggerThanAncestors(), 3);


console.log(countingTree1.countNodesBiggerThanAncestors()); // Output: 1
console.log(countingTree2.countNodesBiggerThanAncestors()); // Output: 4
