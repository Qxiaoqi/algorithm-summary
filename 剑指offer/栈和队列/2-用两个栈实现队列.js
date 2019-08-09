var arr1 = [];
var arr2 = [];

function push(node)
{
  // write code here
  arr1.push(node);
}
function pop()
{
  // write code here
  // arr2为空，arr1不为空才可以向arr2中push
  if (arr2.length === 0) {
    // 如果arr1长度不为0，才可以填arr2
    while (arr1.length !== 0) {
      // 将arr1弹出来的 存入arr2，相当于将arr1的顺序倒过来了
      arr2.push(arr1.pop());
    }
  }
  return arr2.pop();
}

push(1)
push(2)
push(3)
push(5)

var res = []
res[0] = pop()
res[1] = pop()
res[2] = pop()

push(4)
res[3] = pop()
res[4] = pop()


for (var i = 0; i < 5; i++) {
  console.log(res[i]);
}
