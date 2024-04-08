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