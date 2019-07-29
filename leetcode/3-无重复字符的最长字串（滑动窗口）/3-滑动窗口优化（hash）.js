/**
 * 时间复杂度O(n)
 * @param {string} s
 * @return {number}
 */
// 要保证窗口内始终没有重复值
var lengthOfLongestSubstring = function(s) {
  let myMap = new Map();
  let ans = 0;
  let left = 0;
  let right = 0;
  let temp = 0;

  while (right <= s.length - 1) {
    if (!myMap.has(s[right])) {
      // 如果hash表中没有找到，则right+1，并且将该值存入hash
      /* 
      * right+1解释：
      * 这里即优化的核心思路，当窗口右侧找到了一个hash中已经有的数，
      * 这时不需要left+1这样一个一个来(省去了while查找不重复窗口的部分)
      * 直接找到窗口右侧的值当前在hash表中的value，然后将此value赋值给left即可（直接跳过多余步骤） 
      */
      myMap.set(s[right], right + 1)
      right += 1;
    } else {
      // 结算一次ans
      temp = right - left;
      ans = temp > ans ? temp : ans;
      // 找到了重复值，将value赋给left
      left = myMap.get(s[right]);
      // 将窗口右侧值+1存入hash，并且右侧窗口右移一位
      myMap.set(s[right], right + 1);
      right += 1;
    }
  }
  // 循环结束，结算一次ans
  temp = right - left;
  ans = temp > ans ? temp : ans;

  return ans;
};

let res = lengthOfLongestSubstring(" ");
console.log(res);