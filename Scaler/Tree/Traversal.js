let assert = require("assert");
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  insert(val, isLeft = true) {
    if (this.root === null) {
      this.root = new TreeNode(val);
    } else {
      this._insert(this.root, val, isLeft);
    }
  }

  _insert(node, val, isLeft) {
    if (isLeft) {
      if (node.left === null) {
        node.left = new TreeNode(val);
      } else {
        this._insert(node.left, val);
      }
    } else {
      if (node.right === null) {
        node.right = new TreeNode(val);
      } else {
        this._insert(node.right, val);
      }
    }
  }

  getHeight() {
    const height = new Hight(this.root);
    return height.getHeight();
  }

  displayInorderTraversal() {
    const inorder = new InorderTraversal(this.root);
    return inorder.traverse();
  }

  displayPreOrderTraversal() {
    const preorder = new preOrderTraversal(this.root);
    return preorder.traverse();
  }

  displayPostOrderTraversal() {
    const postorder = new postOrderTraversal(this.root);
    return postorder.traverse();
  }
}

class InorderTraversal {
  constructor(root) {
    this.root = root;
  }

  traverse() {
    const result = [];
    this._inorder(this.root, result);
    return result;
  }

  _inorder(node, result) {
    if (node === null) return;

    this._inorder(node.left, result);
    result.push(node.val);
    this._inorder(node.right, result);
  }
}

class preOrderTraversal {
  constructor(root) {
    this.root = root;
  }

  traverse() {
    const result = [];
    this._preorder(this.root, result);
    return result;
  }

  _preorder(node, result) {
    if (node === null) return;

    result.push(node.val);
    this._preorder(node.left, result);
    this._preorder(node.right, result);
  }
}

class postOrderTraversal {
  constructor(root) {
    this.root = root;
  }
  traverse() {
    const result = [];
    this._postorder(this.root, result);
    return result;
  }
  _postorder(node, result) {
    if (node === null) return;

    this._postorder(node.left, result);
    this._postorder(node.right, result);
    result.push(node.val);
  }
}

class Hight {
  constructor(root) {
    this.root = root;
  }

  getHeight() {
    return this._height(this.root);
  }

  _height(node) {
    if (node === null) return -1; // height of empty tree is -1

    const leftHeight = this._height(node.left);
    const rightHeight = this._height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }
}

/*  
Input 1: -> 

   1
    \
     2
    /
   3

Input 2: ->

   1
  / \
 6   2
    /

*/

// Example usage:
//input1
// const tree = new Tree();
// tree.insert(1);
// tree.insert(2, false);
// tree._insert(tree.root.right, 3, true); // to insert 3 as left child of 2

// assert.deepStrictEqual(tree.displayInorderTraversal(), [1, 3, 2]);
// assert.deepStrictEqual(tree.displayPreOrderTraversal(), [1, 2, 3]);
// assert.deepStrictEqual(tree.displayPostOrderTraversal(), [3, 2, 1]);
// assert.deepStrictEqual(tree.getHeight(), 2);

// console.log(tree.displayInorderTraversal()); // Output: [1, 3, 2]
// console.log(tree.displayPreOrderTraversal()); // Output: [1, 2, 3]
// console.log(tree.displayPostOrderTraversal()); // Output: [3, 2, 1]
// console.log("Height of the tree: ", tree.getHeight()); // Output: Height of the tree: 2

// console.log(" \n -------  Input 2 ------- \n");
// //input2
// const tree2 = new Tree();
// tree2.insert(1);
// tree2.insert(6, true);
// tree2.insert(2, false);
// tree2._insert(tree2.root.right, 3, true); // to insert 3 as left child of 2
// tree2._insert(tree2.root.right, 5, false); // to insert 5 as right child of 2
// tree2._insert(tree2.root.right.left, 7, true); // to insert 6 as left child of 3

// assert.deepStrictEqual(tree2.displayInorderTraversal(), [6, 1, 7, 3, 2, 5]);
// assert.deepStrictEqual(tree2.displayPreOrderTraversal(), [1, 6, 2, 3, 7, 5]);
// assert.deepStrictEqual(tree2.displayPostOrderTraversal(), [6, 7, 3, 5, 2, 1]);
// assert.deepStrictEqual(tree2.getHeight(), 3);

// console.log(tree2.displayInorderTraversal()); // Output: [6, 1, 3, 2, 5]
// console.log(tree2.displayPreOrderTraversal()); // Output: [1, 6, 2, 3, 5]
// console.log(tree2.displayPostOrderTraversal()); // Output: [6, 3, 5, 2, 1]
// console.log("Height of the tree: ", tree2.getHeight()); // Output: Height of the tree: 3

module.exports = {
  Tree,
  TreeNode,
  InorderTraversal,
  preOrderTraversal,
  postOrderTraversal,
  Hight,
};
