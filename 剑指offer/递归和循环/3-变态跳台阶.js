function jumpFloorII(number)
{
  // write code here
  if (number === 1) {
    return 1;
  }
  return 2*jumpFloorII(number-1);
}

var res = jumpFloorII(3)

console.log(res);
