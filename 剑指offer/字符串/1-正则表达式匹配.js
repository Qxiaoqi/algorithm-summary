/* 
* 思路，这里有几个问题要注意到
* s和pattern某一个或同时为空的情况
* '.*'是可以匹配到所有的情况的
* 还要考虑到*匹配的情况下什么时候终止，举例 aaa, a*a 这里*只能匹配两个a
* 综上，这里还是选择了 递归 将每一步所有情况都考虑到 列出来即可
*/

//s, pattern都是字符串
function match(s, pattern)
{
  // write code here
  if (s.length === 0 && pattern.length === 0) {
    return true;
  }
  if (s.length > 0 && pattern.length === 0) {
    return false;
  }
  // 匹配串不为0
  if (s.length === 0 && pattern.length > 0) {
    // 如果第二个为*
    if (pattern.length > 1 && pattern[1] === '*') {
      return match(s, pattern.slice(2))
    } else {
      // 不为*则返回
      return false;
    }
  }

  // 一般情况
  if (s.length > 0 && pattern.length > 0) {
    // 如果第二个字符是*，
    if (pattern.length > 1 && pattern[1] === '*') {
      // 且第一个字符不匹配的情况(包含pattern[0]不为.)，pattern后移2
      if (s[0] !== pattern[0] && pattern[0] !== '.') {
        return match(s, pattern.slice(2));
      } else {
        // 第一个字符匹配（包含pattern[0] === .）
        // 1. pattern+2（虽然匹配，但也可以不匹配，举例: aaa, a*a，这里*只能匹配两个a）
        // 2. 匹配一个，s+1，pattern，
        // 3. 匹配一个，s+1，pattern+2
        return match(s, pattern.slice(2)) || match(s.slice(1), pattern) || match(s.slice(1), pattern.slice(2));
      }
    } else {
      // 第二个字符不是*
      if (s[0] === pattern[0] || pattern[0] === '.') {
        // 两者匹配
        return match(s.slice(1), pattern.slice(1));
      } else {
        // 两者不匹配
        return false;
      }
    }
  }
}

var res1 = match('aaa', 'a*a');
var res2 = match('aaa', 'ab*ac*a');
var res3 = match('', '');
var res4 = match('', '.*.*');
var res5 = match('', '.');
var res6 = match('a', '.*');
var res7 = match('ab', '.*');






console.log(res1, res2, res3, res4, res5, res6, res7);

