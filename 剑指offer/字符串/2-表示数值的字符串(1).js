// 判断几个关键字符 '+-'   '.'   'e/E'  这三个关键字符

//s字符串
function isNumeric(s) {
  // 标记符号、小数点、e是否出现过
  var sign = false, decimal = false, hasE = false;

  for (var i = 0; i < s.length; i++) {
    if (s[i] == 'e' || s[i] == 'E') {
      if (i === s.length - 1) return false; // e后面一定要接数字
      if (hasE) return false; // 不能同时存在两个e
      hasE = true;
    } else if (s[i] == '+' || s[i] == '-') {
      // 第二次出现+-符号，则必须紧接在e之后
      if (sign && s[i - 1] != 'e' && s[i - 1] != 'E') return false;
      // 第一次出现+-符号，且不是在字符串开头，则也必须紧接在e之后
      if (!sign && i > 0 && s[i - 1] != 'e' && s[i - 1] != 'E') return false;
      sign = true;
    } else if (s[i] == '.') {
      // e后面不能接小数点，小数点不能出现两次
      if (hasE || decimal) return false;
      decimal = true;
    } else if (s[i] < '0' || s[i] > '9') // 不合法字符
      return false;
  }
  return true;
}