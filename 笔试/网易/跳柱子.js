/*
 * @Description: 跳柱子
 * @Author: xiaoqi
 * @Date: 2019-09-21 16:23:21
 * @LastEditTime: 2019-09-21 16:53:45
 * @LastEditors: xiaoqi
 */
/**
 * @description: 
 * @param {String} str1 
 * @param {String} str2
 * @return: 
 */
function func (str1, str2) {
  let n = parseInt(str1.split(' ')[0]);
  let k = parseInt(str1.split(' ')[1]);

  let arr = str2.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
  }

  // 每次跳柱子都跳范围内最高的
  let i = 0;
  // 记录必杀技是否使用
  let flag = true;
  // 记录当前高度
  let now = arr[0];
  while (i < n) {
    if (i + k >= n - 1 && (arr[i] >= arr[n - 1] || flag === true)) {
      // 终点在范围内，而且满足高度（或者还有必杀技）
      // console.log('YES');
      return 'YES';
    }
    // 选择目标
    let max = 0;
    let target = 0;
    for (let j = 1; i + j < n && j <= k; j++) {
      if (now >= arr[i+j] && arr[i+j] >= max) {
        // 如果高度满足，而且最大
        max = arr[i+j];
        target = j;
      }
    }
    // 循环完毕
    if (target === 0) {
      // 说明没办法再跳了，判断是否还有必杀技
      if (flag === true) {
        // 还有必杀技，直接跳范围内最大值
        let mast = arr[i+1];
        for (let j = 1; i + j < n && j <= k; j++) {
          if (arr[i+j] >= mast) {
            mast = arr[i+j];
            target = j;
          }
        }
        // 直接跳
        i = i + target;
        now = arr[i];
        // 更改now
        // 使用必杀技
        flag = false;
      } else {
        // 没有必杀技，也没办法跳了
        return 'NO';
      }
    } else {
      // 说明可以跳
      i = i + target;
      now = arr[i];
    }
  }
}

let res1 = func('5 1', '6 2 4 3 8');
console.log(res1);
let res2 = func('5 1', '1 8 2 3 4');
console.log(res2);




