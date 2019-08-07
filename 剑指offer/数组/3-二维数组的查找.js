function Find(target, array)
{
  // // write code here
  // 暴力
  // for (var i = 0; i < array.length; i++) {
  //   for (var j = 0; j < array[i].length; j++) {
  //     if (array[i][j] === target) {
  //       return true;
  //     }
  //   }
  // }  
  // return false;

  // 从左上角or左下角开始
  // 这里从左下角开始查
  // 如果target大，则右移
  // 如果target小，则上移
  var i = 0;
  var j = array.length - 1;
  var flag = false;
  while(i < array[0].length && j >= 0) {
    if (target > array[j][i]) {
      i++;
      continue;
    } else if (target < array[j][i]) {
      j--;
      continue;
    } else if (target === array[j][i]) {
      flag = true;
      break;
    }
  }
  return flag;
}


var array = [
  [1, 2, 3, 4],
  [4, 5, 6, 7],
  [7, 8, 9, 10]
]

var res = Find(50, array);
console.log(res);