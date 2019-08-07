let data1 = [49, 38, 65, 97, 76, 13, 29, 49];
// data2[0]用来放置哨兵
let data2 = [0, 49, 38, 65, 97, 76, 13, 29, 49];
// 折半查找数据
let data3 = [0, 49, 38, 65, 97, 76, 13, 29, 49];

/* 
  插入排序，每次都将数插入到有序数组里
  插入后，将后面的数向后移
  
  稳定，时间复杂度O(n²)
*/

// 基本版本
function InsertSort(data) {
  // i从1开始，第一个数直接放进去
  for (let i = 1; i < data.length; i++) {
    // 当前待插入的数
    let temp = data[i];
    // 待插入位置
    let j;
    // 此处j>0必写，虽然不会报错，但是此处会越界，即data[-1]
    for (j = i; j > 0 && temp < data[j-1]; j--) {
      // 待插入的数比前面一个小的情况下，前面的数往后移
      data[j] = data[j-1];   
    }
    data[j] = temp;
  }
  return data;
}

// 加上哨兵版本
// 哨兵的作用就是防止越界，并且减少了比较次数
// 内层循环不需要再比较j>0了，因为该数最多等于data[0]，不会再向前了，提高了效率
function InsertSortSentry(data) {
  // i从2开始，小于等于
  for (let i = 2; i < data.length; i++) {
    // 将当前选中的数，赋值给哨兵
    data[0] = data[i];
    let j;
    for (j = i; data[0] < data[j-1]; j--) {
      // 哨兵值小于前面的值
      data[j] = data[j-1];
    }
    data[j] = data[0];
  }
  return data;
}

// let data3 = [0, 49, 38, 65, 97, 76, 13, 29, 49];
// 折半查找版本
// 时间复杂度记录移动次数不变，减少了比较次数，时间复杂度仍是O(n²)
function BInsertSort(data) {
  for (let i = 2; i < data.length; i++) {
    // 分别初始化折半查找范围，从第一个数到待插入数的前一个
    let low = 1;
    let high = i - 1;
    // 保存当前数到data[0]，只是记录作用，并无哨兵作用
    data[0] = data[i];
    while (low <= high) {
      // 折半，且为小数时要向下取整
      let m = Math.floor((low + high) / 2);
      if (data[0] < data[m]) {
        // 在低半区
        high = m - 1;
      } else {
        // 在高半区
        low = m + 1;
      }
    }
    let j;
    for (j = i - 1; j >= high + 1; j--) {
      data[j+1] = data[j];
    }
    data[high+1] = data[0];
  }
  return data;
}

console.log(InsertSort(data1));

console.log(InsertSortSentry(data2));

console.log(BInsertSort(data3));
