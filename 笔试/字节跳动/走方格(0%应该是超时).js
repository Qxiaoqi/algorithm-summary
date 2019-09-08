function func(arr) {
  let i = 0;
  // 记录方向，1代表向右，-1代表向左
  let dir = 1;
  // 记录总分
  let sum = 0;
  let flag = false;
  while (i >= 0 && i < arr.length) {
    if (arr[i] > 0) {
      flag = false;
      // 非0情况
      sum += arr[i];
      arr[i]--;
      i += dir;
      continue;
    }

    if (arr[i] === 0) {
      // flag = false;
      // 0时，需要将该方块删除
      arr.splice(i, 1);
      // 如果向左，需要将坐标左移，如果方向向右，则无需处理
      if (dir === -1) {
        i--;
      }
      continue;
    }

    if (arr[i] === '>' || arr[i] === '<') {

      if (flag === false) {
        // 上一块不是方向砖
        dir = arr[i] === '>' ? 1 : -1;
        i += dir;
      } else {
        // 上一块是方向砖，方向不变，删除该砖
        arr.splice(i, 1);
        if (dir === -1) {
          i--;
        }
      }

      flag = true;
      continue;
    }
  }

  // console.log()
  return sum;
}





// // 4 10 6
let arr = ['>', '2', '<', '5', '>', '3', '<'];
for (let i = 0; i < arr.length; i++) {
  if (parseInt(arr[i]) >= 0 ) {
    arr[i] = parseInt(arr[i]);
  }
}
// arr.splice(0, 1);
// console.log(arr);
let res = func(arr);
console.log(res);


// 7 10 6
// > 2 < 5 > 3 <
// 1 7
// 1 3
// 3 5
// 5 7
// 1 4
// 4 7


// console.log(arr.slice(0, 4));
// // 第一个数-1， 第二个数

// // 读一组数，传入func一组数组

// // 1 4
// // 1 3
// // 2 4
// // 2 3
// // 1 1
// // 2 2


// if (parseInt('1')) {
//   console.log(1);
// } else {
//   console.log(parseInt('0'))
// }