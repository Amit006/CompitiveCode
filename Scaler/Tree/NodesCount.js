const {Tree} = require("./Traversal.js");
const assert = require("assert");

class CountingTreeNodes {
  constructor(tree) {
    this.tree = tree;
  }

  countNodes() {
    return this._countNodes(this.tree.root);
  }

  _countNodes(node) {
    if (node === null) {
      return 0;
    }
    return 1 + this._countNodes(node.left) + this._countNodes(node.right);
  }
}



/*Example Input

Input 1:

 Values =  1 
          / \     
         4   3                        
Input 2:

 
 Values =  1      
          / \     
         4   3                       
        /         
       2                                     
*/


const tree1 = new Tree();
tree1.insert(1);
tree1.insert(4, true);
tree1.insert(3, false);
const countingTree1 = new CountingTreeNodes(tree1);
assert.strictEqual(countingTree1.countNodes(), 3);
const tree2 = new Tree();
tree2.insert(1);
tree2.insert(4, true);
tree2.insert(3, false);
tree2._insert(tree2.root.left, 2, true); // to insert 2 as left child of 4
const countingTree2 = new CountingTreeNodes(tree2);
assert.strictEqual(countingTree2.countNodes(), 4);


console.log(countingTree1.countNodes()); // Output: 3
console.log(countingTree2.countNodes()); // Output: 4
