function TreeLinkNode(x){
  this.val = x;
  this.left = null;
  this.right = null;
  this.next = null;
}

let arr = [];
function GetNext(pNode)
{
  // write code here
  // 找到根节点
  let r = pNode;
  while (r.next) {
    r = r.next;
  }
  // 此时r为根节点
  // 中序遍历
  inOrderTraverse(r, pNode);
  // console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === pNode) {
      return arr[i+1];
    }
  }

  // return resNode;
}

function inOrderTraverse(root, target) {
  let r = root;

  r.left && inOrderTraverse(r.left, target);
  if (r.val) {
    arr.push(r);
  }
  r.right && inOrderTraverse(r.right, target);
}

let node1 = new TreeLinkNode(1);
let node2 = new TreeLinkNode(2);
let node3 = new TreeLinkNode(3);
let node4 = new TreeLinkNode(4);
let node5 = new TreeLinkNode(5);
// let node6 = new TreeLinkNode(6);

// node1.left = node2;
// node1.right = node4;

// node2.right = node3;
// node2.next = node1;

// node3.next = node2;

// node4.left = node5;
// node4.right = node6;
// node4.next = node1;

// node5.next = node4;

// node6.next = node4;

// let res = GetNext(node3);

node1.left = node2;
node1.right = node5;

node2.left = node3;
node2.right = node4;

node2.next = node1;
node3.next = node2;
node4.next = node2;
node5.nect = node1;

let res = GetNext(node1);

console.log(res);
