// 题目：找最小字典序列 只有 +，-，*，/ 四种（没有括号）
// 如果相邻两个交换 不影响结果，则可以任意交换
// 定义最小字典序列：前面的数永远最小

// 思路：两个指针 i，j
// i指向可交换的 第一个数 ，j指向可交换最后一个数的下一位
// 途中，将数组push入dealArr，然后sort排序，然后循环dealArr，并将 i 指针逐渐后移到 j 前一位，并赋值

// 乘法：只需考虑前一个运算符即可，如果是除法，则不将前一个入数组

// 加法：需要考虑前一个运算符（只有第一个运算符是+号，才能左右都入数组），
// 同时也要考虑下下一个运算符（*和/情况下，下一个数不能入数组）。

function func (n, str) {
  let arr = str.split(' ');
  console.log(arr);

  // 第一遍，把所有乘法交换
  // 如果乘法前面是 除法 则交换后面的，其余情况都可交换
  let i = 1;
  let j = 1;
  let delArr = [];
  while (i < arr.length && j < arr.length) {
    // 乘法
    if (arr[i] === '*') {
      j = i;
      // 如果上一个运算符是除法 
      if (i-2 >= 0 && arr[i-2] === '/') {
        i += 1;
        delArr.push(arr[i]);
      } else {
        i -= 1;
        // 不是除法 都可以放
        delArr.push(arr[i]);
        delArr.push(arr[i+2]);
      }
      while (j < arr.length) {
        // 下一个运算符是乘法
        if (j+2 < arr.length && arr[j+2] === '*') {
          delArr.push(arr[j+3]);
          j += 2;
        } else {
          j += 2;
          // 结算乘法
          // console.log(delArr);
          delArr = delArr.sort((a, b) => {
            return parseInt(a) < parseInt(b) ? -1 : 1;
          });
          // 记录替换数组当前下标
          let c = 0;
          while (i <= j) {
            arr[i] = delArr[c];
            c++;
            i += 2;
          }
          i = j - 2;
          delArr = [];
          break;
        }
      }
    }

    // 加法
    if (arr[i] === '+') {
      j = i;
      // 最开始上一个运算符不管是什么，都不可以将其放进来
      if (i-2 >= 0) {
        i += 1;
        delArr.push(arr[i]);
      } else {
        // 加号是第一个运算符
        i -= 1;
        // 不是除法 都可以放
        delArr.push(arr[i]);
        delArr.push(arr[i+2]);
      }
      while (j < arr.length) {
        // 下一个运算符是加法，而且如果有下下一个运算符，该运算符不能是 乘法 或者 除法
        if (j+2 < arr.length && arr[j+2] === '+' && (j+4 > arr.length-1 || arr[j+4] !== '*' && arr[j+4] !== '/')) {
          delArr.push(arr[j+3]);
          j += 2;
        } else {
          j += 2;
          // 结算加法
          // console.log(delArr);
          delArr = delArr.sort((a, b) => {
            return parseInt(a) < parseInt(b) ? -1 : 1;
          });
          // 记录替换数组当前下标
          let c = 0;
          while (i <= j) {
            arr[i] = delArr[c];
            c++;
            i += 2;
          }
          i = j - 2;
          delArr = [];
          break;
        }
      }
    }
    i += 2;
  }
  console.log(arr);
}


let n = 6;
let str = '3 + 2 + 1 + -4 * -5 + 1';
// let str = '6 / 3 * 1 * -2 / 10 + 1 * -1 * 2';


let res = func(n, str);
// console.log(res);
