function func (n) {
  let res = [];

  // 存储上半三角
  for (let i = 0; i < n; i++) {
    let temp = [];
    // 打印空格
    for (let j = 0; j < n - (i + 1); j++) {
      temp.push(" ");
    }
    // 存储数字（左半边）
    for (let j = 0; j < Math.ceil((2 * i + 1) / 2); j++) {
      temp.push(n - j);
    }
    // 对称存储右半边（数字+空格）
    for (let j = n; j < 2 * n - 1; j++) {
      temp.push(temp[2*n-2-j]);
    }
    res.push(temp);
  }

  // 对称存储下半边
  for (let i = n; i < 2 * n - 1; i++) {
    res.push(res[2*n-2-i]);
  }

  // console.log(res);
  return res;
}

let n = 5;
let res = func(n);

res.forEach(item => {
  console.log(item.join(' '));
})
