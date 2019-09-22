/*
 * @Description: 积木
 * @Author: xiaoqi
 * @Date: 2019-09-21 15:58:29
 * @LastEditTime: 2019-09-21 16:13:46
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
  let m = parseInt(str1.split(' ')[1]);

  let arr = str2.split(' ');

  // 每走一格开始校验
  let i = 0;
  while (i < n) {
    // 先把当前格子中的所有积木放包里
    m = m + parseInt(arr[i]);
    if (m >= i) {
      // 如果当前背包中积木数量，满足需要
      m = m - i;
      i++;
    } else {
      // 无法满足需要，直接返回
      // console.log('NO');
      return 'NO';
    }
  }
  // console.log('YES');
  return 'YES';
  // // 计算积木总数，直接比较 0+1+2+……大小即可
  // let all = m;
  // for (let i = 0; i < arr.length; i++) {
  //   all += parseInt(arr[i]);
  // }

  // // 计算最小需要积木数量
  // let need = 0;
  // for (let i = 0; i < n; i++) {
  //   need += i;
  // }

  // if (all >= need) {
  //   // console.log('YES');
  //   return 'YES';
  // } else {
  //   // console.log('NO');
  //   return 'NO';
  // }
}

func('5 2', '0 0 1 2 1');
// func('5 3', '2 2 3 3 1');
