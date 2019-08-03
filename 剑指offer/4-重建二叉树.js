function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

function reConstructBinaryTree(pre, vin)
{
  // write code here
  if (pre.length === 0) {
    return null;
  }
  // 存根节点的下标
  var root;
  // 左子树 右子树 的前序遍历和后序遍历
  var leftPre = [],
      leftVin = [],
      rightPre = [],
      rightVin = [];

  for (var i = 0; i < vin.length; i++) {
    if (vin[i] === pre[0]) {
      // 找到中序遍历的根节点 下标
      root = i;
      break;
    }
  }

  var head = new TreeNode(pre[0]);

  // 存左子树的 前序遍历 和 中序遍历
  for (var j = 0; j < root; j++) {
    leftPre.push(pre[j + 1]);
    leftVin.push(vin[j]);
  }

  // 存右子树的 前序遍历 和 中序遍历
  for (var k = root + 1; k < vin.length; k++) {
    rightPre.push(pre[k]);
    rightVin.push(vin[k]);
  }

  head.left = reConstructBinaryTree(leftPre, leftVin);
  head.right = reConstructBinaryTree(rightPre, rightVin);

  return head;
}

var pre = [1,2,4,7,3,5,6,8];
var vin = [4,7,2,1,5,3,8,6];

var res = reConstructBinaryTree(pre, vin);
console.log(res);