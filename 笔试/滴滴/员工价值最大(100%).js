function func (n, m, arr) {
  let res = 0;
  for (let i = 0; i < m; i++) {
    // 每一列找一个最大的
    let max = 0;
    for (let j = 0; j < n; j++) {
      if (arr[j][i] > max) {
        max = arr[j][i];
      }
    }
    res += max;
  }
  return res;
}


let arr = [[1, 3, 3],
           [2, 2, 2],
           [3, 3, 1]];
let n = 3;
let m = 3;

let res = func(n, m, arr);
console.log(res);