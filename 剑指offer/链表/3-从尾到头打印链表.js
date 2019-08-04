/*function ListNode(x){
  this.val = x;
  this.next = null;
}*/
function printListFromTailToHead(head)
{
  // write code here
  var r = head;
  var arr = [];
  while(r) {
    arr.unshift(r.val);
    r = r.next;
  }
  return arr;
}

var a = []

a.unshift(1)
a.unshift(2)
console.log(a)