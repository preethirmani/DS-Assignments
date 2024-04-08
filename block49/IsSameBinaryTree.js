/**
 * Create a Node class in JavaScript to build parts of a binary tree. Then, make an 'isSameTree' function. This function checks two binary trees and tells if they are the same or not. Test your function by making two binary trees and comparing them. For an input binary tree with nodes [1,2,3], 'isSameTree' should return 'true' for the same output [1,2,3] and 'false' otherwise. 
 */


class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const node1 = new TreeNode(1);
node1.left = new TreeNode(2);
node1.right = new TreeNode(3);

//console.log('node1', node1);

const node2 = new TreeNode(1);
node2.left = new TreeNode(2);
node2.right = new TreeNode(3);

//console.log('node2', node2);

function isSame(node1 , node2) {
  if(node1 === null && node2 === null) return true;
  if(node1 === null || node2 === null) return false;
 
  if(node1.val != node2.val) return false;
  
  return isSame(node1.left, node2.left) && isSame(node1.right, node2.right);
  
}

console.log(isSame(node1, node2));