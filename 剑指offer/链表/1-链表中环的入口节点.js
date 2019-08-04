/* 
思路：使用hashMap来存节点，如果第二次找到了该节点，就说明成环了，输出即可
*/

function ListNode(x){
  this.val = x;
  this.next = null;
}

function EntryNodeOfLoop(pHead)
{
  // write code here
  var myMap = new Map();
  var r = pHead;
  while (r) {
    if (myMap.has(r)) {
      // 已经找到了目标
      return r;
    }
    myMap.set(r, 1);
    r = r.next;
  }
}

var l1 = new ListNode(1);
var l2 = new ListNode(2);
var l3 = new ListNode(3);
var l4 = new ListNode(4);
var l5 = new ListNode(5);

l1.next = l2;
l2.next = l3;
l3.next = l4;
l4.next = l5;
l5.next = l2;

var res = EntryNodeOfLoop(l1);

console.log(res);
