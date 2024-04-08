/**
 * Question 1
Begin by defining a Node class for the individual nodes in the binary tree, each containing a value and pointers for the left and right nodes. Following this, write an inorder function that receives a tree's root node as an argument and prints the node values in an inorder sequence. To test your solution, establish a binary tree containing nodes with integer values [1,2,3,4,5]. Invoke the inorder function to check the output [4,2,5,1,3]. 
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const node = new TreeNode(1);
node.left = new TreeNode(2);
node.left.left = new TreeNode(4);
node.left.right = new TreeNode(5);
node.right = new TreeNode(3);
console.log(node);


function inorder(node) {
  if(node === null) return;
  inorder(node.left);
  console.log(node.val);
  inorder(node.right);
}

inorder(node);