// DFS = 【非递归】深度优先遍历
// 栈

function TreeNode (data) {
  this.val = data;
  this.left = null;
  this.right = null;
}


function deepTravel (root) {
  let stack = [];
  
  if (!root) {
    return;
  }
  stack.push(root);
  while (stack.length) {
    let node = stack.pop();
    node.val && console.log(node.val);

    // 深度优先 根左右，因此需要反过来入栈，这样后面弹出时才是正确的
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
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

deepTravel(node1);