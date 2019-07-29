/**
 * 时间复杂度O(2n) = O(n)
 * 这里最坏的情况即所有值相同，例如"bbbbb"，每个位置都将被left和right遍历
 * 
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
  while (right < s.length) {
    // 如果在hash表中没有找到窗口右侧的数
    if (!myMap.has(s[right])) {
      // 则将该数添加到hash表中，并将right+1
      myMap.set(s[right], 1)
      right += 1;
    } else {
      // 如果在hash表中找到窗口右侧的数，则记录right-left比较大小后并存入ans
      temp = right - left;
      ans = temp > ans ? temp : ans;
      // 在hash表中移除左值，左侧窗口+1，并且继续查表，如果还有左侧就继续移除，并移动。
      do {
        myMap.delete(s[left]);
        left += 1;
      } while (myMap.has(s[right]));
    }
  }
  temp = right - left;
  ans = temp > ans ? temp : ans;
  // console.log(ans);
  return ans;

};

let res = lengthOfLongestSubstring("bbbb a");
console.log(res);