// 有4跳过

function func(n) {
  let number = 1;
  let i = 1;

  while (i <= n) {

    if (('' + number).indexOf('4') !== -1) {
      // 如果要发的数字里有4
      number++;
      continue;
    } else {
      // 没有4，则下一个人
      i++;
      number++;
    }

  }
  
  console.log(number-1);
}

func(50000);

