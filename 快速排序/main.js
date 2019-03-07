// arrObj.data[0]用来暂存枢轴，这里直接定义对象，后面函数中传入对象的引用，可直接修改原数组
let arrObj = {
  data: [0, 49, 38, 65, 97, 76, 13, 29, 49]
}

/**
 * 基本思想：通过一趟排序将记录分为两部分，一边比枢轴小，一边比枢轴大
 * 然后，再对已分的两边再次进行快排，直到整个记录有序
 * 不稳定，时间复杂度O(nlogn)
 * 
 * @param {Object} arrObj 目标数组对象 
 * @param {Number} low 数组低下标
 * @param {Number} high 数组高下标
 */
function Partition(arrObj, low, high) {
  // 记录枢轴
  arrObj.data[0] = arrObj.data[low];
  while (low < high) {
    while (low < high && arrObj.data[high] >= arrObj.data[0]) {
      high--;
    }
    // 从后往前找，找到比枢轴大的下标，将该值与枢轴交换（此时low指向枢轴位置）
    arrObj.data[low] = arrObj.data[high];
    // 并不需要给此时的data[high]赋值枢轴，因为该值将在下次被换掉
    while (low < high && arrObj.data[low] <= arrObj.data[0]) {
      low++;
    }
    // 从前往后找，找到比枢轴小的下标，将该值与枢轴交换（此时high指向枢轴位置，但该值并非枢轴值，因为上一步并未赋值）
    arrObj.data[high] = arrObj.data[low];
  }
  // 此时low与high相等，最后一步将枢轴值赋给目标位置，此时左侧都比枢轴小，右侧都比枢轴大
  arrObj.data[low] = arrObj.data[0];
  return low;
}


/**
 * 递归形式的快排
 * 
 * @param {Object} arrObj 
 * @param {Number} low 
 * @param {Number} high 
 */
(function QSort(arrObj, low, high) {
  if (low < high) {
    // m存储每次快排后的枢轴位置
    m = Partition(arrObj, low, high);
    // 对低部分进行递归排序
    QSort(arrObj, low, m - 1);
    // 对高部分进行递归排序
    QSort(arrObj, m + 1, high);
  }
})(arrObj, 1, arrObj.data.length - 1);


console.log(arrObj.data);

