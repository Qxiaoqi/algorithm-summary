// 队列

function TreeNode (data) {
  this.val = data;
  this.left = null;
  this.right = null;
}


function widthTravel (root) {
  let queue = [];
  
  if (!root) {
    return;
  }
  queue.push(root);
  while (queue.length) {
    let node = queue.shift();
    node.val && console.log(node.val);

    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
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

widthTravel(node1);