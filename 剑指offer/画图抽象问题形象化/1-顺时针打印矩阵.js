function printMatrix(matrix)
{
  // write code here
  let res = [];
  if (!matrix.length) {
    return;
  }
  // 一维矩阵
  if (!matrix[0].length) {
    for (let i = 0; i < matrix.length; i++) {
      // console.log(matrix[i]);
      res.push(matrix[i]);
    }
    return res;
  }
  // // 二维矩阵只有一行
  // if (matrix.length === 1) {
  //   for (let i = 0; i < matrix[0].length; i++) {
  //     res.push(matrix[0][i]);
  //   }
  //   return res;
  // }
  // // 二维矩阵只有一列
  // if (matrix[0].length === 1) {
  //   for (let j = 0; j < matrix.length; j++) {
  //     // console.log(matrix[j][0]);
  //     res.push(matrix[j][0]);
  //   }
  //   return res;
  // }

  // 存左上角和右下角
  let topLeft = [0, 0];
  let bottomRight = [matrix.length - 1, matrix[0].length - 1];

  while (topLeft[0] < bottomRight[0] && topLeft[1] < bottomRight[1]) {
    // 第一行
    for (let i = topLeft[1]; i <= bottomRight[1]; i++) {
      // console.log(matrix[topLeft[0]][i]);
      res.push(matrix[topLeft[0]][i]);
    }
    // 最后一列
    for (let j = topLeft[0] + 1; j <= bottomRight[0]; j++) {
      // console.log(matrix[j][bottomRight[1]]);
      res.push(matrix[j][bottomRight[1]]);
    }
    // 最后一行
    for (let i = bottomRight[1] - 1; i >= topLeft[1]; i--) {
      // console.log(matrix[bottomRight[0]][i]);
      res.push(matrix[bottomRight[0]][i]);
    }
    // 第一列
    for (let j = bottomRight[0] - 1; j >= topLeft[0] + 1; j--) {
      // console.log(matrix[j][topLeft[1]]);
      res.push(matrix[j][topLeft[1]]);
    }
    topLeft[0] += 1;
    topLeft[1] += 1;
    bottomRight[0] -= 1;
    bottomRight[1] -= 1;
  }
  // // 特殊情况，奇数正方形，或者非方形
  if (topLeft[0] === bottomRight[0] && topLeft[1] === bottomRight[1]) {
    // console.log(matrix[topLeft[0]][topLeft[1]]);
    res.push(matrix[topLeft[0]][topLeft[1]]);
    return res;
  } else if (topLeft[0] === bottomRight[0] && topLeft[1] < bottomRight[1]) {
    // console.log(matrix[topLeft[0]][topLeft[1]]);
    // console.log(matrix[bottomRight[0]][bottomRight[1]]);
    for (let i = topLeft[1]; i <= bottomRight[1]; i++) {
      res.push(matrix[topLeft[0]][i]);
    }
    return res;
  } else if (topLeft[1] === bottomRight[1] && topLeft[0] < bottomRight[0]) {
    for (let j = topLeft[0]; j <= bottomRight[0]; j++) {
      res.push(matrix[j][topLeft[1]]);
    }
    return res;
  }
  return res;
}


// let matrix = [[1, 2, 3], 
//               [4, 5, 6], 
//               [7, 8, 9]];
// let matrix = [[1, 2, 3, 4]];
let matrix = [[1], 
              [4], 
              [7]];
// let matrix = [[1, 2, 3, 4],
//               [5, 6, 7, 8],
//               [9, 10, 11, 12],
//               [13, 14, 15, 16]];
// let matrix = [1, 2, 3, 4];
// let matrix = [];
// let matrix = [[1, 2, 3, 4, 5],
//               [6, 7, 8, 9, 10],
//               [11, 12, 13, 14, 15]];

let res = printMatrix(matrix);
console.log(res);