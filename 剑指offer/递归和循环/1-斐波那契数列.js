function Fibonacci(n)
{
  // write code here
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  var arr = [0, 1];
  var res = 0;
  for (var i = 2; i <= n; i++) {
    res = arr[0] + arr[1];
    arr[0] = arr[1];
    arr[1] = res;
  }
  // console.log(res);
  return res;
}


Fibonacci(7);
// console.log(res);


// 0 1 1 2 3 5 8 13