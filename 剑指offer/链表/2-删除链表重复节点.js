/* 
思路：遍历两遍链表
* 第一遍找出所有重复的val，并删除除了第一次出现的节点以外的所有重复节点。
* 第二遍将重复出现的val的第一此出现的节点删去
* 使用Map，key存ListNode.val，val存0和1，0代表没有重复，1代表重复 
* 创建哑节点方便处理
*/

function ListNode(x){
  this.val = x;
  this.next = null;
}
function deleteDuplication(pHead)
{
  // write code here
  // 创建一个哑节点
  var p = new ListNode(null);
  p.next = pHead;

  var r = p;
  // 处理第一个节点
  var myMap = new Map();
  // myMap.set(r.val, 0);
  // 每次处理下一个节点
  while (r.next) {
    if (!myMap.has(r.next.val)) {
      // 如果下一个节点没有找到该val
      myMap.set(r.next.val, 0);
    } else if (myMap.get(r.next.val) === 0){
      // 如果下一个节点只出现一次，且第二次找到了该val
      myMap.set(r.next.val, 1);
    }

    if (myMap.get(r.next.val) === 1) {
      // 下一个节点不只一次出现，将下一个节点删除
      r.next = r.next.next;
    } else {
      r = r.next;
    }
  }

  // 第二遍处理（第一遍中第一次出现的还没删去）
  r = p;
  while (r.next) {
    if (myMap.get(r.next.val) === 1) {
      // 如果找到了重复的
      r.next = r.next.next
    } else {
      r = r.next;
    }
  }

  return p.next;
}

var l1 = new ListNode(1);
var l2 = new ListNode(2);
var l3 = new ListNode(3);
var l4 = new ListNode(3);
var l5 = new ListNode(4);
var l6 = new ListNode(4);
var l7 = new ListNode(4);
var l8 = new ListNode(4);
var l9 = new ListNode(5);

l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = l6;
l6.next = l7;
l7.next = l8;
l8.next = l9;

var res = deleteDuplication(l1);
console.log(res);
