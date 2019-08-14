// 根 左 右

function TreeNode (data) {
  this.val = data;
  this.left = null;
  this.right = null;
}

function preOrderTraverse (node) {
  // console.log(node);
  let r = node;
  if (r.val) {
    print(r);
  }
  r.left && preOrderTraverse(r.left);
  r.right && preOrderTraverse(r.right);
}

function print (node) {
  console.log(node.val);
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);

node1.left = node2;
node1.right = node4;

node2.right = node3;

node4.left = node5;
node4.right = node6;

preOrderTraverse(node1);


