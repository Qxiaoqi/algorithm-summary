function func (rotateArray) {
  if (!rotateArray) {
    return;
  }

  if (rotateArray.length === 0) {
    return 0;
  } else if (rotateArray.length === 1) {
    return rotateArray[0];
  }
  
  let left = 0;
  let right = rotateArray.length - 1;


  while (left + 1 !== right) {
    let m = Math.floor((left + right) / 2);
    if (rotateArray[m] > rotateArray[0]) {
      // 中间数在前面的递增序列，将left移动
      left = m;
    } else if (rotateArray[m] < rotateArray[0]){
      // 中间数在后面序列，将right移动
      right = m;
    } else {
      // 相等情况，有重复数字，right往前逐个查，找到小于第一个数的
      while (rotateArray[right] >= rotateArray[0]) {
        right--;
      }
      // 此时right指向最小值，直接return
      return rotateArray[right];
    }
  }

  // 循环结束时，left指向前面递增序列最后一个，right指向后面序列的第一个
  // console.log(rotateArray[left]);
  // console.log(rotateArray[right]);
  return rotateArray[right];
}

let rotateArray = [3, 4, 5, 1, 2];
// let rotateArray = [1, 0, 1, 1, 1];
// let rotateArray = [1, 1, 1, 0, 1];

let res = func(rotateArray);
console.log(res);