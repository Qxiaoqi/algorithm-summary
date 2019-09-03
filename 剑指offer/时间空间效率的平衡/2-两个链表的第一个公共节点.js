function ListNode(x) {
  this.val = x;
  this.next = null;
}

function FindFirstCommonNode(pHead1, pHead2) {
  // write code here
  let myMap = new Map();
  let p = pHead1;
  let q = pHead2;

  while (p) {
    myMap.set(p, 1);
    p = p.next;
  }

  while (q) {
    if (myMap.has(q)) {
      return q;
    }
    q = q.next;
  }
  return;
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

var l6 = new ListNode(6);
var l7 = new ListNode(7);
var l8 = new ListNode(8);
var l9 = new ListNode(9);

l6.next = l7;
l7.next = l8;
l8.next = l3;

let res = FindFirstCommonNode(l1, l6);
console.log(res);