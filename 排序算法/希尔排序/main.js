// 自定一个增量序列（最后一个增量值必须为1）
let dlta = [5, 3, 1];
// 目标数组，data[0]用来暂存
let data = [0, 49, 38, 65, 97, 76, 13, 29, 49];


/* 
  希尔排序，是插入排序的一种
  思路：根据增量序列的确定，经过前几次的排序，将目标变得基本有序
  最后在对全体进行一次插入排序
  原因：从直接插入排序可知，如果数组基本有序，其时间复杂度可提高至O(n)

  不稳定，希尔排序时间复杂度不确定，取决于增量序列的设置
*/

/**
 * 
 * @param {Array} data 目标数组 
 * @param {Number} dk 增量值 
 */
function ShellInsert(data, dk) {
  for (let i = dk + 1; i < data.length; i++) {
    if (data[i] < data[i-dk]) {
      // 如果当前待插入值 小于 前一个，开始内层循环
      data[0] = data[i];
      // i-dk 代表待插入值的 前一个数
      // j<0时代表已经找到位置
      let j;
      for (j = i - dk; j > 0 && data[0] < data[j]; j -= dk) {
        // 开始后移
        data[j+dk] = data[j];
      }
      data[j+dk] = data[0];
    }
  }
  return data;
}

/**
 * 
 * @param {Array} data 目标数组 
 * @param {Array} dlta 增量序列 
 */
function ShellSort(data, dlta) {
  let newArr = [].concat(data);
  for (let i = 0; i < dlta.length; i++) {
    newArr = ShellInsert(newArr, dlta[i]);
  }
  return newArr;
}

console.log(ShellSort(data, dlta));
