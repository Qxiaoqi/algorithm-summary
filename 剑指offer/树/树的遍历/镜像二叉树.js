function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function Mirror (root)
{
  // write code here
  // 广度优先遍历，每个节点的两个孩子节点交换位置
  if (!root) {
    return;
  }

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let node = queue.shift();
    // node.val && console.log(node.val);
    let temp;
    if (node) {
      temp = node.left;
      node.left = node.right;
      node.right = temp;
    }

    node && queue.push(node.left);
    node && queue.push(node.right);
  }
  console.log(root);
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

Mirror(node1);