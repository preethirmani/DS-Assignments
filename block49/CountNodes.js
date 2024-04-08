/**
 * Develop a 'countNodes' function to calculate the total nodes in a binary tree, and build a TreeNode class for a binary tree in JavaScript. For complete trees, it uses the formula 2^h - 1. Verify the function using a given root tree. For a binary tree input with nodes [10,11,12,13,14,15,16], the 'countNodes' function should yield an output of 7.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const node = new TreeNode(10);
node.left = new TreeNode(11);
node.left.left = new TreeNode(13);
node.left.right = new TreeNode(14);
node.right = new TreeNode(12);
node.right.left = new TreeNode(15);
node.right.right = new TreeNode(16);

console.log('node', node);

function countNodes(node) {
  if(node === null) return 0;

  function count(node, sum) {
    if(node === null) return sum;
    sum = sum + node.val;
    countNodes(node.left, sum);
    countNodes(node.right, sum);
  }

  return count(node, 0);
}

console.log(countNodes(node));