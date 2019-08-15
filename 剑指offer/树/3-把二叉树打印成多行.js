function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function Print(pRoot)
{
  // write code here
  // 广度优先遍历，队列
  let queue = [];
  let res = [];
  if (!pRoot) {
    return [];
  }
  queue.push(pRoot);

  while (queue.length) {
    let count = 0;
    let length = queue.length;
    let temp = [];

    while (count < length) {
      let node = queue.shift();
      
      // 存当前行的 val
      node && node.val && temp.push(node.val);

      // 入队列
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      count++;
    }
    res.push(temp);
  }
  return res;
  // for (let i = 0; i < res.length; i++) {
  //   console.log(res[i].join(' '));
  // }
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

Print(node1);