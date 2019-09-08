function func(arr) {
  if (!arr) {
    return;
  }
  if (arr.length === 0) {
    return;
  }

  let res = [];
  // 给所有结果赋初值0
  for (let i = 0; i < arr.length; i++) {
    res[i] = 0;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] >= arr[i]) {
        // 找到了比当前机器人高的第一个机器人
        res[j] += 1;
        // 跳出内层循环
        break;
      }
    }
  }
  // 记录最大值下标
  let max = 0;
  for (let i = 0; i < res.length; i++) {
    if (res[i] > res[max]) {
      max = i;
    }
  }
  if (res[max] === 0) {
    // 说明都无法看到
    return arr[arr.length - 1];
  }
  // console.log(max);
  return arr[max];
  
}

let arr = ['6', '5', '3', '4'];
// let arr = [];
// let arr = [2, 2, 2, 2];
// let arr = [4, 5, 6, 7];

let res = func(arr);
console.log(res);