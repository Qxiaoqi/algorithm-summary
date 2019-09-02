function func (n, cStr, aStr) {
  if (cStr.length === 13) {
    return;
  }
  let cArr = [];
  let aArr = aStr.split(' ');
  let tempArr = aStr.split(' ');
  for (let i in cStr) {
    cArr.push(cStr[i].charCodeAt() - '65');
  }
  let length = cArr.length;
  for (let i = 0; i < length; i++) {
    let temp = cArr.pop();
    aArr.splice(temp, 1);
  }
  aArr.sort((a, b) => {
    return parseInt(a) > parseInt(b) ? -1 : 1;
  })
  let max = aArr[0];
  let c = 0;
  while (true) {
    if (tempArr[c] === max) {
      break;
    }
    c++;
  }
  let res = String.fromCharCode(65+c);
  return res;

  // console.log(aArr);
  // console.log(max);
  // console.log(c);
  // console.log(res);
}






let n = 6;
let cStr = 'BCD';
let aStr = '98 42 98 84 84 40 75 97 98 7 8 40 54';

let res = func(n, cStr, aStr);
console.log(res);

// console.log('A'.charCodeAt());
