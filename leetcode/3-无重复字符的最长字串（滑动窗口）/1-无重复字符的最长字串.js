/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // console.log(s);
  let max = 0;
  if (s.length === 1) {
    max = 1;
    return max;
  }
  for (let i = 0; i < s.length; i++) {
    // console.log(s[i]);
    let str = s[i];
    for (let j = i + 1; j < s.length; j++) {
      // 判断之前是否有重复字母
      if (str.indexOf(s[j]) === -1) {
        // 没找到，说明无重复
        str += s[j];
        if (str.length > max) {
          max = str.length;
        }
      } else {
        // 找到了，说明有重复
        if (str.length > max) {
          max = str.length;
        }
        break;
      }
    }
  }
  return max;
};

console.log(lengthOfLongestSubstring("pwwkew"));
