/*
 * @Description: 碰碰数（效率太低，超时）
 * @Author: xiaoqi
 * @Date: 2019-09-20 20:10:03
 * @LastEditTime: 2019-09-20 23:51:12
 * @LastEditors: xiaoqi
 */
/**
 * @description: 
 * @param {Array} arr 
 * @param {Array} num 
 * @return: 
 */
function func (arr, num) {
  if (!arr) {
    return;
  }

  // 将所有数都存入Map中（因为不重复）
  let myMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    myMap.set(arr[i], i);
  }

  // 整理出所有区间
  let target = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      target.push([i, j]);
    }
  }
  // console.log(target);

  if (!num) {
    return target.length;
  }

  // 依次读取碰碰数，排除法
  // console.log(num);
  for (let i = 0; i < num.length; i++) {
    // 两个碰碰数的下标
    let a = myMap.get(num[i][0]) >= 0 ? myMap.get(num[i][0]) : -1;
    let b = myMap.get(num[i][1]) >= 0 ? myMap.get(num[i][1]) : -1;

    // 从后向前遍历区间，将目标排除
    for (let j = target.length - 1; j >= 0; j--) {
      if (a >= target[j][0] && a <= target[j][1] && b >= target[j][0] && b <= target[j][1]) {
        // 在区间
        target.splice(j, 1);
      }
    }
  }

  // console.log(target.length);
  return target.length;
}


let arr = ['1', '3', '2', '4'];
// let arr = [];
let num = [['3', '2'], ['2', '4']];
let res = func(arr, num);
console.log(res);