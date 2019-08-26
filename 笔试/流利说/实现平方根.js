// 实现平方根
// 牛顿迭代法
// f(x)=x²-a  
// => x = x - f(x)/2x
// => x = x - (x² - a) / 2x 
// => x = x/2 + a/2x

function func(n) {
  // 赋初值
  var temp = n;
  // 不断逼近
  for (var i = 0; i <= n && (temp - n / temp) > 0.0001; i++) {
    temp = (temp + (n / temp)) / 2;
    // console.log('temp:', temp);
    // console.log('rela:', Math.sqrt(n));
    // console.log(temp - n / temp);
    // console.log((temp - n / temp) < 0.0001);
  }
  // temp = temp.toFixed(4);

  return temp;
}

var n = 2;

var res = func(n);
console.log(res);
// console.log(Math.sqrt(n));
