/*
 * @Description: 二分寻找  时间复杂度 log(m+n)
 * @Author: xiaoqi
 * @Date: 2019-09-15 08:56:41
 * @LastEditTime: 2019-09-15 23:42:35
 * @LastEditors: xiaoqi
 */

// 解析：https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-w-2/

/**
 * @description: 
 * @param {Array} arr1 数组1 
 * @param {Array} arr2 数组2 
 * @return: 中位数
 */
function main (arr1, arr2) {
  // 奇数和偶数情况不同，但可以合并，奇数情况下 left=right，计算两次即可
  // 注意：此时left和right并不是下标，而是从1开始的
  let left = Math.floor((arr1.length + arr2.length + 1) / 2);
  let right =  Math.floor((arr1.length + arr2.length + 2) / 2);
  let res = (getKth(arr1, arr2, left) + getKth(arr1, arr2, right)) / 2;
  return res;
}

function getKth (arr1, arr2, k) {
  if (arr1.length === 0) {
    return arr2[k-1]
  } else if (arr2.length === 0) {
    return arr1[k-1];
  }

  if (k === 1) {
    return Math.min(arr1[0], arr2[0]);
  }


  // m是下标
  // 如果当前数组长度不够中间的，则直接指向最后一个即可
  let m1 = Math.min(arr1.length, Math.floor(k / 2)) - 1;
  let m2 = Math.min(arr2.length, Math.floor(k / 2)) - 1;

  if (arr1[m1] > arr2[m2]) {
    // 如果第一个数组的大，则将第二个数组的一半直接删除
    k = k - (m2 + 1);
    return getKth(arr1, arr2.slice(m2+1), k);
  } else {
    // 将第一个数组的部分删除
    k = k - (m1 + 1);
    return getKth(arr1.slice(m1+1), arr2, k);
  }
}

// let arr1 = [1, 3, 4, 9];
let arr1 = [1, 3];
// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [2];
let res = main(arr1, arr2);
console.log(res);
