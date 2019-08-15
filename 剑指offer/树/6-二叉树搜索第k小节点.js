function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function KthNode(pRoot, k)
{
  // write code here
  // 二叉搜索树
  // 左边节点都比当前节点小
  // 右边节点都比当前节点大
  // 因此中序遍历就是 从小到大 排好序的
  // 非递归
  let stack = [];
  let r = pRoot;
  let index = 1;
  if (!pRoot) {
    return;
  }
  
  while (r !== null || stack.length) {
    if (r !== null) {
      stack.push(r);
      r = r.left;
    } else {
      // r === null情况，左边已经没有节点了，可以弹栈输出      
      let node = stack.pop();
      if (index === k) {
        // 当前node就是目标
        return node;
      }
      // 弹一次栈，出一个第index小的值
      index++;
      r = node.right;
    }
  }
  // 栈弹完还没结果
  return;
}

let node1 = new TreeNode(3);
let node2 = new TreeNode(1);
let node3 = new TreeNode(2);
let node4 = new TreeNode(5);
let node5 = new TreeNode(4);
let node6 = new TreeNode(6);

node1.left = node2;
node1.right = node4;

node2.right = node3;

node4.left = node5;
node4.right = node6;

let res = KthNode(node1, 2);
console.log(res);