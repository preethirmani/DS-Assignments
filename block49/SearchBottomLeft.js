/**
 * Find the leftmost value in the last row of a binary tree with distinct node values. Use the TreeNode class, which defines a node's structure. Implement the 'searchBottomLeftValue(root)' function, taking the root of the binary tree as input. This function should return the value of the leftmost node in the last row of the tree. Test your function by using a binary tree with nodes [2,1,3,4,5,6] as input. The 'searchBottomLeftValue(root)' function should then return an output of 6.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const node = new TreeNode(2);
node.left = new TreeNode(1);
node.left.left = new TreeNode(4);

node.right = new TreeNode(3);
node.right.left = new TreeNode(5);
node.right.left.left = new TreeNode(6);

console.log('node', node);


function searchBottomLeftValue(root) {
  if(root === null) return 0;
  const queue = [root];
  let bottomLeft = root.val;
  while(queue.length > 0) {
    let size = queue.length; // 1 initally
    for(let i = 0 ; i < size; i++) {
      let node = queue.shift();
      if(i === 0) bottomLeft = node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
   return bottomLeft;
}

console.log(searchBottomLeftValue(node));
