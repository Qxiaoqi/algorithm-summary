/*
 * @Description: 最小数位和
 * @Author: xiaoqi
 * @Date: 2019-09-21 15:28:38
 * @LastEditTime: 2019-09-21 15:37:17
 * @LastEditors: xiaoqi
 */
function func (num) {
  let target = parseInt(num);
  let sum = 0;
  let res = '';
  while (sum !== parseInt(num)) {
    if (target > 9) {
      res = 9 + res;
      target -= 9;
      sum += 9;
    } else {
      // 直接加上即可
      res = target + res;
      sum += target;
    }
  }

  console.log(res);
}


func('7');
// let res = func(18);
// console.log(res)