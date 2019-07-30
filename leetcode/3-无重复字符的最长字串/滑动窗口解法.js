/**
 * @param {string} s
 * @return {number}
 */
// 要保证窗口内始终没有重复值
var lengthOfLongestSubstring = function(s) {
  let myMap = new Map();
  let ans = 0;
  let left = 0;
  let right = 0;
  while (right < s.length) {
    // 如果在hash表中没有找到窗口右侧的数
    if (!myMap.has(s[right])) {
      // 则将该数添加到hash表中，并将right+1
      myMap.set(s[right], 1)
      right += 1;
    } else {
      // 如果在hash表中找到窗口右侧的数，则记录right-left比较大小后并存入ans
      let res = right - left;
      ans = res > ans ? res : ans;
      // 在hash表中移除目标值,并且左侧窗口+1
      myMap.delete(s[left]);
      left += 1;

    }
  }
  console.log(ans);

};

lengthOfLongestSubstring("pwwkew");