/**
 * @param val
 * @constructor
 * 链表节点数据结构,供参考
 */

let Node = function (val) {
  this.val = val;
  this.next = null;
}


/**
 * @param linkedList1:ListNode linkedList1 is the head of the linked list
 * @param linkedList2:ListNode linkedList2 is the head of the linked list
 * @returns {string}
 * 合并链表方法
 */
var mergeTwoListsFunction = function (linkedList1, linkedList2) {
  /**
   *TODO:在这里完成你的代码，实现两个链表合并，并返回结果
   */

  let p = linkedList1;
  let q = linkedList2;
  if (!p) {
    return q;
  } else if (!q) {
    return p;
  }
  let res;
  if (p.val < q.val) {
    res = new Node(p.val);
    p = p.next;
  } else {
    res = new Node(q.val);
    q = q.next;
  }
  let r = res;
  while (p || q) {
    if (!p) {
      r.next = q;
      break;
    } else if (!q) {
      r.next = p;
      break;
    }
    if (p.val < q.val) {
      r.next = new Node(p.val);
      p = p.next;
      r = r.next;
      continue;
    } else {
      r.next = new Node(q.val);
      q = q.next;
      r = r.next;
      continue;
    }

  }

  let temp = [];
  while (res) {
    temp.push(res.val);
    res = res.next;
  }
  temp.push('null');
  return temp.join('->');
  

  // return res;
  // console.log(res);
}

let linkedListStr1 = '1->3->8->null';
let arr1 = linkedListStr1.split('->');
let linkedListStr2 = '0->1->2->null';
let arr2 = linkedListStr2.split('->');


// 构建链表1
let temp1 = [];
for (let i = 0; i < arr1.length; i++) {
  let node = new Node(arr1[i]);
  temp1.push(node);
}
let linkedList1 = null;
if (temp1[0].val !== 'null') {
  linkedList1 = temp1[0];
}
for (let i = 1; i < temp1.length - 1; i++) {
  temp1[i-1].next = temp1[i];
}
// console.log(linkedList1);

// 构建链表2
let temp2 = [];
for (let i = 0; i < arr2.length; i++) {
  let node = new Node(arr2[i]);
  temp2.push(node);
}
let linkedList2 = null;
if (temp2[0].val !== 'null') {
  linkedList2 = temp2[0];
}
for (let i = 1; i < temp2.length - 1; i++) {
  temp2[i-1].next = temp2[i];
}
// console.log(linkedList2);

console.log(mergeTwoListsFunction(linkedList1, linkedList2));

