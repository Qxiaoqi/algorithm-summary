function func (n, str) {
  // 0代表小写，1代表大写
  let flag = 0;
  let count = 0;

  if (!str) {
    return count;
  }

  str = str.split('');
  
  for (let j = str.length; j >= 0; j--) {
    if (/[0-9]/.test(str[j])) {
      count += 1;
      str.splice(j, 1);
    }
  }
  str = str.join('');
  n = str.length;

  let i;
  for (i = 0; i + 1 < n; i += 2) {
    
    // aa 或者 AA
    if (str[i] === str[i+1]) {
      // 两个都是小写情况，而且此时是小写输入   或者 都是大写情况，而且此时是大写输入
      if (/[a-z]/.test(str[i]) && flag === 0 || /[A-Z]/.test(str[i]) && flag === 1) {
        // flag不变
        count += 2;
        continue;
      } else if (/[a-z]/.test(str[i]) && flag === 1 || /[A-Z]/.test(str[i]) && flag === 0) {
        // 两个都是小写，但是此时是大写输入   或者 都是大写情况，而且此时是小写输入
        if (flag === 0) {
          flag = 1;
        } else {
          flag = 0;
        }
        count += 3;
        continue;
      } 
    }

    // aA  Aa
    if (str[i] !== str[i+1]) {
      if (/[a-z]/.test(str[i]) && flag === 0 || /[A-Z]/.test(str[i]) && flag === 1) {
        // 第一个小写 而且输入小写  或者 第一个大写 输入大写
        if (i+2 < n && /[a-z]/.test(str[i+2])) {
          // 如果第3位小写，则转成小写
          flag = 0;
        } else if (i+2 < n && /[A-Z]/.test(str[i+2])) {
          // 第三位大写，则转成大写
          flag = 1;
        }
        count += 3;
        continue;
      }

      if (/[a-z]/.test(str[i]) && flag === 1 || /[A-Z]/.test(str[i]) && flag === 0) {
        // flag不用变
        count += 3;
        continue;
      }
    }
  }
  // 单个情况
  if (i < n) {
    if (/[a-z]/.test(str[i]) && flag === 0 || /[A-Z]/.test(str[i]) && flag === 1) {
      count += 1;
    } else {
      count += 2;
    }
  }

  return count;
}

let str = 'AaAAAA';
let n = str.length;

let res = func(n, str);
console.log(res);


// console.log(/[a-z]/.test('A'))


