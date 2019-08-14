// 左 右 根

function TreeNode (data) {
  this.val = data;
  this.left = null;
  this.right = null;
}

function postOrderTraverse (node) {
  // console.log(node);
  let r = node;
  r.left && postOrderTraverse(r.left);
  r.right && postOrderTraverse(r.right);
  if (r.val) {
    print(r);
  }
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

postOrderTraverse(node1);


