function duplicate(numbers, duplication)
{
  // write code here
  //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
  //函数返回True/False
  var myMap = new Map();
  for (var i = 0; i < numbers.length; i++) {
    if (myMap.has(numbers[i])) {
      duplication[0] = numbers[i];
      return true;
    } else {
      myMap.set(numbers[i], i);
    }
  }
  return false;
}

duplicate([2,1,3,1,4],[]);