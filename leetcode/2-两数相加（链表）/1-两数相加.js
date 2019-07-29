/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let p = l1;
  let q = l2;
  // 哑节点
  let l3 = new ListNode(0);
  let r = l3;
  // 记录进位
  let carry = 0;
  while(p || q) {
    let x = p ? p.val : 0;
    let y = q ? q.val : 0;
    let sum = x + y + carry;
    carry = parseInt(sum / 10);
    sum = sum % 10;
    r.next = new ListNode(sum);
    r = r.next;

    if (p) {
      p = p.next;
    }
    if (q) {
      q = q.next;
    }

    if (carry > 0) {
      // 说明此时首位还能进位
      r.next = new ListNode(carry);
    }
  }

  return l3.next;
};

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

function ListNode(val) {
  this.val = val;
  this.next = null;
}

console.log(addTwoNumbers(l1, l2));
