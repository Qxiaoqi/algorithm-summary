/*
 * @Description: 
 * @Author: xiaoqi
 * @Date: 2019-08-26 12:26:43
 * @LastEditTime: 2019-09-20 21:26:28
 * @LastEditors: xiaoqi
 */
function printMatrix(arr)
{
  // write code here
  let res = [];
  if (!arr.length) {
    return;
  }
  // 一维矩阵
  if (!arr[0].length) {
    for (let i = 0; i < arr.length; i++) {
      // console.log(arr[i]);
      res.push(arr[i]);
    }
    return res;
  }
  
  // 存左上角和右下角
  let topLeft = [0, 0];
  let bottomRight = [arr.length - 1, arr[0].length - 1];

  while (topLeft[0] < bottomRight[0] && topLeft[1] < bottomRight[1]) {
    // 第一行
    for (let i = topLeft[1]; i <= bottomRight[1]; i++) {
      // console.log(arr[topLeft[0]][i]);
      res.push(arr[topLeft[0]][i]);
    }
    // 最后一列
    for (let j = topLeft[0] + 1; j <= bottomRight[0]; j++) {
      // console.log(arr[j][bottomRight[1]]);
      res.push(arr[j][bottomRight[1]]);
    }
    // 最后一行
    for (let i = bottomRight[1] - 1; i >= topLeft[1]; i--) {
      // console.log(arr[bottomRight[0]][i]);
      res.push(arr[bottomRight[0]][i]);
    }
    // 第一列
    for (let j = bottomRight[0] - 1; j >= topLeft[0] + 1; j--) {
      // console.log(arr[j][topLeft[1]]);
      res.push(arr[j][topLeft[1]]);
    }
    topLeft[0] += 1;
    topLeft[1] += 1;
    bottomRight[0] -= 1;
    bottomRight[1] -= 1;
  }
  // // 特殊情况，奇数正方形，或者非方形
  if (topLeft[0] === bottomRight[0] && topLeft[1] === bottomRight[1]) {
    // console.log(arr[topLeft[0]][topLeft[1]]);
    res.push(arr[topLeft[0]][topLeft[1]]);
    return res;
  } else if (topLeft[0] === bottomRight[0] && topLeft[1] < bottomRight[1]) {
    // console.log(arr[topLeft[0]][topLeft[1]]);
    // console.log(arr[bottomRight[0]][bottomRight[1]]);
    for (let i = topLeft[1]; i <= bottomRight[1]; i++) {
      res.push(arr[topLeft[0]][i]);
    }
    return res;
  } else if (topLeft[1] === bottomRight[1] && topLeft[0] < bottomRight[0]) {
    for (let j = topLeft[0]; j <= bottomRight[0]; j++) {
      res.push(arr[j][topLeft[1]]);
    }
    return res;
  }
  return res;
}


// let arr = [[1, 2, 3], 
//               [4, 5, 6], 
//               [7, 8, 9]];
// let arr = [[1, 2, 3, 4]];
// let arr = [[1], 
//               [4], 
//               [7]];
// let arr = [[1, 2, 3, 4],
//               [5, 6, 7, 8],
//               [9, 10, 11, 12],
//               [13, 14, 15, 16]];
// let arr = [1, 2, 3, 4];
// let arr = [];
let arr = [[1, 2, 3, 4, 5],
              [6, 7, 8, 9, 10],
              [11, 12, 13, 14, 15]];

let res = printMatrix(arr);
console.log(res);