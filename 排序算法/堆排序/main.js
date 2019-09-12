/*
 * @Description: 堆排序
 * @Date: 2019-09-12 16:18:17
 * @LastEditTime: 2019-09-12 20:20:08
 */

/* 
* 思路：堆是具有一定性质的完全二叉树：
* 每个节点的值 >= 孩子节点，大顶堆  arr[i] >= arr[2i+1] && arr[i] >= arr[2i+2]  
* 每个节点的值 <= 孩子节点，小顶堆  arr[i] <= arr[2i+1] && arr[i] <= arr[2i+2]  

* 首先从最后一个非叶子节点开始向前遍历 构造大顶堆/小顶堆
* 然后将第一个和最后一个交换位置
* 然后再次调整堆，注意堆整体长度条件
* 
*/


(function main () {
  let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

  sort(arr);
  console.log(arr);
})();


function sort (arr) {
  // 构建大顶堆
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    // 从最后一个非叶子节点开始逐个遍历
    adjustHeap(arr, i, arr.length);
  }

  // 交换首尾，并且调整堆结构
  for (let j = arr.length - 1; j >= 0; j--) {
    swap(arr, 0, j);
    adjustHeap(arr, 0, j);
  }
}


/**
 * @description: 调整堆结构
 * @param {Array} arr 操作数组
 * @param {Number} index 调整的非叶子节点
 * @param {Number} length 操作数组长度
 * @return: 
 */
function adjustHeap (arr, index, length) {
  // 记录需要调整的节点
  let temp = arr[index];
  for (let i = 2 * index + 1; i < length; i = 2 * i + 1) {
    // 从需要调整节点的左子节点开始判断，并且不超过当前堆的长度，每次跨度都是2k+1，左子节点
    if (i+1 < length && arr[i+1] > arr[i]) {
      // 如果当前需要判断的子节点的 右孩子节点比 左孩子节点大，那么将当前节点变成右节点
      i += 1;
    }
    if (arr[i] > temp) {
      // 如果子节点大于父节点
      arr[index] = arr[i];
      // 重新赋值index目标
      index = i;
    } else {
      // 如果子节点不大于父节点
      break;
    }
  }
  // 最后index指向temp需要放置的位置
  arr[index] = temp;
}

/**
 * @description: 
 * @param {Array} arr 待操作数组
 * @param {Number} i 待交换的数组下标
 * @param {Number} j 第二个待交换数组下标 
 * @return: 
 */
function swap (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}