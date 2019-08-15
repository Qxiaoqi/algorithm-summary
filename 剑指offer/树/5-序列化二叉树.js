/* 
  深度优先遍历 序列化 存字符串
  递归构建二叉树
*/

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function Serialize(pRoot)
{
  // write code here
  // 深度优先遍历，栈
  let stack = [];
  let res = '';
  if (!pRoot) {
    return '#';
  }
  stack.push(pRoot);

  while (stack.length) {
    let node = stack.pop();

    // 节点为空（null）
    if (node === null) {
      res += '#,';
    } else if (node.val) {
      res += node.val + ',';
    }
    
    node && stack.push(node.right);
    node && stack.push(node.left);
  }
  // console.log(res);
  return res;
}
function Deserialize(s)
{
  // write code here
  if (s === '#') {
    return;
  }
  let arr = s.split(',');
  // 删去最后一个空值
  arr.splice(arr.length-1, 1);
  // console.log(arr);
  
  let root = reConstructTree(arr);
  return root;  
}

function reConstructTree (arr) {
  let val = arr.shift();
  let node;

  if (val !== '#') {
    val = parseInt(val);
    node = new TreeNode(val);
  } else if (val === '#') {
    return null;
  }

  node.left = reConstructTree(arr);
  node.right = reConstructTree(arr);

  return node;
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

Serialize(node1);
Deserialize('1,2,#,3,#,#,4,5,#,#,6,#,#,');
