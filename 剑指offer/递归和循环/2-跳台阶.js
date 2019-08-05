/* 
* 思路：斐波那契数列
* 如果 第一次 跳一阶 则有跳法f(n-1)
* 如果 第一次 跳两阶 则有跳法f(n-2)
*/


function jumpFloor(number)
{
  // write code here
  if (number === 1) {
    return 1;
  } else if (number === 2) {
    return 2;
  }
  return jumpFloor(number-1) + jumpFloor(number-2);
}

var res = jumpFloor(5);
console.log(res);