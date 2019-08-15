function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

// 思路：BFS，同时入栈两个，出栈两个，比较值
// left.left, right.right;   left.right, right.left;

function isSymmetrical(pRoot)
{
  // write code here
  let queue = [];
  if (pRoot === null) {
    return true;
  }
  // 同时入栈两个，左右对称入栈并比较
  queue.push(pRoot.left);
  queue.push(pRoot.right);

  while (queue.length) {
    let node1 = queue.shift();
    let node2 = queue.shift();

    // 比较是否同为null
    if (node1 === null && node2 === null) {
      continue;
    }
    // 是否其中一个是null
    if (node1 === null || node2 === null) {
      return false;
    }
    if (node1.val !== node2.val) {
      return false;
    }

    // 入队列
    queue.push(node1.left);
    queue.push(node2.right);
    queue.push(node1.right);
    queue.push(node2.left);
  }
  return true;
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(2);
let node4 = new TreeNode(3);
let node5 = new TreeNode(3);

node1.left = node2;
node1.right = node3;

node2.left = node4;

node3.right = node5;

let res = isSymmetrical();
console.log(res);