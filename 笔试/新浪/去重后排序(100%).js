function func (str) {
  let arr = str.split(',');
  arr = [...new Set(arr)];
  arr.sort(function(a, b) {
    return b - a;
  })
  // console.log(arr);
  console.log(arr.join(','));

}


func('1,2,1,2,1,3');