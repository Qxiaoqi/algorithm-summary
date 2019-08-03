function Find(target, array)
{
  // write code here
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j] === target) {
        return true;
      }
    }
  }  
  return false;
}


var array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

var res = Find(5, array);
console.log(res);