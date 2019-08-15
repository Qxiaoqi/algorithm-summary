function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function isSymmetrical (pRoot)
{
  // write code here
  let mirror = bfsFun(pRoot);
  console.log(mirror);
}

// 转镜像二叉树
// 广度优先， 队列
function bfsFun (root) {
  let queue = [];
  if (root.length === 0) {
    return;
  }
  queue.push(root);

  while (queue.length) {
    let node = queue.shift();
    // 交换两个子树，可不用判断，没有的null一样可交换
    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    // 入队列
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return root;
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

isSymmetrical(node1);