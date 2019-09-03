/* 
  维护三个指针，指向三个对应数组当前值
  质因子并非因数，比如8=2^3，不是8=2*4这样考虑的 
*/

function GetUglyNumber_Solution(index)
{
  // write code here
  // 小于7全是丑数
  if (index < 7) {
    return index;
  }

  let arr = [];
  // 维护三个指针，指向当前队列最小的数
  let p1 = 0, p2 = 0, p3 = 0;
  let newNum = 1;
  arr.push(newNum);

  while (arr.length < index) {
    newNum = Math.min(arr[p1] * 2, arr[p2] * 3, arr[p3] * 5);
    if (newNum === arr[p1] * 2) p1++;
    if (newNum === arr[p2] * 3) p2++;
    if (newNum === arr[p3] * 5) p3++;
    arr.push(newNum);
  }

  // console.log(arr);
  return arr[index - 1];
}

GetUglyNumber_Solution(16);