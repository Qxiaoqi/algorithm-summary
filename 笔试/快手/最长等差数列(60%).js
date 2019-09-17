/*
 * @Description: 
 * @Author: xiaoqi
 * @Date: 2019-09-16 22:03:02
 * @LastEditTime: 2019-09-16 22:22:35
 * @LastEditors: xiaoqi
 */
/**
 * @description: 
 * @param {Array} arr 
 * @return: 
 */
function func (arr) {
  if (!arr) {
    return 0;
  }

  if (arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return 1;
  }

  arr.sort();
  // 滑动窗口
  let i = 0;
  let j = 1;
  let distance = arr[i+1] - arr[i];
  // 最后记得+1
  let max = 1;

  while (i < arr.length) {
    if ((j+1 < arr.length) && (arr[j+1] - arr[j] === distance)) {
      // 下一个符合
      j++;
    } else {
      // 下一个不符合，开始移动 i
      // 先结算长度
      if (j - i > max) {
        max = j - i;
      }
      i++;
      if (i < arr.legnth && i + 1 < arr.legnth) {
        distance = arr[i+1] - arr[i];
      }
    }
  }

  return max + 1;
}


let arr = ['1', '4', '2', '5', '3'];
let res = func();
console.log(res);