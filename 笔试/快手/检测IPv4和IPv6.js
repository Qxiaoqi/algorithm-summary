/*
 * @Description: 
 * @Author: xiaoqi
 * @Date: 2019-09-16 20:58:13
 * @LastEditTime: 2019-09-16 21:28:31
 * @LastEditors: xiaoqi
 */
function judge (ip) {
  let arr1 = ip.split('.');

  if (arr1.length === 4) {
    // ipv4格式
    let res = judgeIPv4(arr1);
    if (res) {
      return 'IPv4';
    }
  }

  let arr2 = ip.split(':');  

  if (arr2.length === 8) {
    // ipv6格式
    let res = judgeIPv6(arr2);
    if (res) {
      return 'IPv6';
    }
  }


  // 都不满足
  return 'Neither';
}


function judgeIPv4 (arr) {
  // 逐一判断每一段
  for (let i = 0; i < arr.length; i++) {
    if (!(parseInt(arr[i]) >= 0 && parseInt(arr[i]) <= 255)) {
      // 如果不在范围
      return false;
    }

    if (arr[i][0] === '0' && arr[i][1]) {
      // 以0开头，且第二个数存在
      return false;
    }
  }

  return true;
}

function judgeIPv6 (arr) {
  // 逐一判断每一段
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 0 || arr[i].length > 4) {
      // 没有数字，或者超过
      return false;
    }

    // 遍历每一段中的每一个字符
    for (let j = 0; j < arr[i].length; j++) {
      if (!(parseInt(arr[i][j], 16) >= 0 && parseInt(arr[i][j], 16) <= 15)) {
        // 不在范围内的
        return false;
      }
    }
  }

  return true;
}


let data1 = '172.16.254.1';
let data2 = '2001:0db8:85a3:0:0:8A2E:0370:7334';
let data3 = '256.256.256.256';

let res = judge(data3);
console.log(res);



// console.log(parseInt('b', 16));