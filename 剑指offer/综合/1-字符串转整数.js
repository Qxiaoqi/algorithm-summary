function StrToInt(str)
{
  // write code here
  var isPositiveN = true;
  var start = 0;
  var res = 0;
  if (str[0] === "+" || str[0] === "-") {
    isPositiveN = str[0] === "-" ? false : true;
    // 从1开始
    start = 1;
  } 
  for (var i = start; i < str.length; i++) {
    if (/\d/.test(str[i])) {
      var n = str[i] - '0';
      res = res * 10 + n;
    } else {
      return 0;
    }
  }
  res = isPositiveN === true ? res : -res;
  return res;
}

var res = StrToInt("-2147483647");
console.log(res);