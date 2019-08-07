/* 
* 画图矩阵
* 上三角下三角计算 连乘
*/

function multiply(array)
{
  // write code here
  var B = [];
  B[0] = 1;
  // 下三角
  for (var i = 1; i < array.length; i++) {
    B[i] = B[i-1] * array[i-1];
  }

  var temp = 1;
  // 上三角
  for (var j = array.length - 2; j >= 0; j--) {
    temp = array[j+1] * temp;
    B[j] = B[j] * temp;
  }

  return B;
}

var res = multiply([1, 2, 3, 4, 5]);
console.log(res);