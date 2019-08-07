function rectCover(number)
{
  // write code here
  if (number === 1) {
    return 1;
  } else if (number === 2) {
    return 2;
  } 

  var arr = [1, 2];
  var res = 0;
  for (var i = 2; i < number; i++) {
    res = arr[0] + arr[1];
    arr[0] = arr[1];
    arr[1] = res;
  }
  return res;
}

var res = rectCover(5);
console.log(res);