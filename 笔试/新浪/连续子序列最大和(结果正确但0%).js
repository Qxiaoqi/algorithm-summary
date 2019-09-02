function func (str) {
  if (str.length === 0) {
    return;
  }
  // console.log(str);
  let arr = str.split(',');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
  }
  // console.log(arr);
  // 滑动窗口，保证窗口内的永远是当前最大的
  let i = 0;
  let j = 0;
  // let myMap = new Map();
  let max = arr[0];
  let ind = [];
  while (i < arr.length) {
    if (arr[i] < 0) {
      // 如果i指向的数小于0，则j无需后移，直接把i后移
      if (arr[i] > max) {
        max = arr[i];
        ind = [];
        ind.push(arr[i]);
      }
      i++;
      continue;
    }
    // i指向的数大于0，此时j可以后移
    let temp = [];
    temp.push(arr[i]);
    j = i;
    let sum = arr[i];
    if (sum >= max) {
      max = sum;
      ind = Object.assign([], temp);
    }
    while (j < arr.length && sum >=0) {
      j++;
      sum += arr[j];
      temp.push(arr[j]);
      if (sum > max) {
        // ind.push(arr[j]);
        ind = Object.assign([], temp);
        max = sum;
      }
    }
    i++;
  }

  console.log(max + '|' + ind.join(','));
  // console.log(ind);
  // console.log({
  //   count: max,
  //   ind: ind
  // })
}


let str = '-2,-8,7,-3,10,-1';
func(str);



