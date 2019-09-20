/*
 * @Description: 日期处理
 * @Author: xiaoqi
 * @Date: 2019-09-20 20:57:19
 * @LastEditTime: 2019-09-20 23:51:35
 * @LastEditors: xiaoqi
 */
function func (str) {
  let data = {
    '1': 31,
    '2': 28,
    '3': 31,
    '4': 30,
    '5': 31,
    '6': 30,
    '7': 31,
    '8': 31,
    '9': 30,
    '10': 31,
    '11': 30,
    '12': 31,
  }


  let arr = str.split(' ');
  let year = parseInt(arr[0]);
  let month = parseInt(arr[1]);
  let day = parseInt(arr[2]);

  // 闰年为 true，其它为 false
  let flag = false;
  // 先判断是不是闰年
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    flag = true;
    if (year % 3200 === 0) {
      if (year % 172800 === 0) {
        flag = true;
      } else {
        flag = false;
      }
    }
  }

  if (flag === true) {
    data['2'] = 29;
  }

  if (day > data[month]) {
    let temp = day - data[month];
    if (month === 12) {
      month = 1;
      year++;
    } else {
      month++;
    }
    day = temp;
  }

  year = year.toString();
  month = month.toString().length === 2 ? month.toString() : '0' + month.toString();
  day = day.toString().length === 2 ? day.toString() : '0' + day.toString();

  let res = year + '-' + month + '-' + day;
  return res;
}

let str = '2000 2 29';
let res = func(str);
console.log(res);