/*
 * @Description: 翻倍
 * @Author: xiaoqi
 * @Date: 2019-09-21 15:43:37
 * @LastEditTime: 2019-09-21 15:50:32
 * @LastEditors: xiaoqi
 */
function func (str) {
  let arr = str.split(' ');
  let A = parseInt(arr[0]);
  let B = parseInt(arr[1]);
  let p = parseInt(arr[2]);
  let q = parseInt(arr[3]);

  // 贪心，如果 A+p不能满足 条件的话 就让其 p * q
  let count = 0;
  while (A < B) {
    if (A + p >= B) {
      count++;
      break;
    } else {
      p = p * q;
      count++;
    }
  }
  // console.log(count);
  return count;
}


func('1 5 7 2');
// func('1 15 4 2');
