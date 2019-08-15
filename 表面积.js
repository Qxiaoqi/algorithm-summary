function func(grid) {
  // 第一遍先遍历所有位置，算出竖直方向遮挡面数
  // i横移，j竖移
  // ny竖直遮挡面数 
  let ny = 0;
  let nx = 0;
  // 总面数
  let all = 0;
  for (let j = 0; j < grid.length; j++) {
    for (let i = 0; i < grid[0].length; i++) {
      // 竖直遮挡面数
      if (grid[j][i] > 0) {
        ny += 2 * grid[j][i] - 2;
      }
      // 所有面数
      all += grid[j][i] * 6;
      // 比较水平方向
      if (j-1 >= 0) {
        // 上方存在，取两值最小方
        if (grid[j][i] >= grid[j-1][i]) {
          nx += grid[j-1][i];
        } else {
          nx += grid[j][i];
        }
      }
      // 比较右方
      if (i+1 < grid[0].length) {
        // 右方存在，取两值最小方
        if (grid[j][i] >= grid[j][i+1]) {
          nx += grid[j][i+1];
        } else {
          nx += grid[j][i];
        }
      }
      // 比较下方
      if (j+1 < grid.length) {
        // 下方存在，取两值最小方
        if (grid[j][i] >= grid[j+1][i]) {
          nx += grid[j+1][i];
        } else {
          nx += grid[j][i];
        }
      }
      // 比较左方
      if (i-1 >= 0) {
        // 左方存在，取两值最小方
        if (grid[j][i] >= grid[j][i-1]) {
          nx += grid[j][i-1];
        } else {
          nx += grid[j][i];
        }
      }
    }
  }
  // console.log(ny);
  // console.log(nx);
  // console.log(all);
  let res = all - nx - ny;
  return res
}


// let grid = [[2, 3, 1],
//            [3, 1, 1],
//            [1, 2, 2]];
let grid = [[2, 2], [2, 2]]
let res = func([[1, 0], [0, 2]]);
console.log(res);

// let test = [];
// let temp = [];
// temp.push(1);
// test.push(temp);
// console.log(test)