function func(n) {
  let i = 0;
  let ch = 5;

  let count = 0;
  while (true) {
    i = (i + ch) > n ? ((i + ch) % n) : (i + ch);
    if (i === n || i === 0) {
      count++;
      break;
    }
    count++;
    n--;
    i--;
  }
  console.log(count);
}

// func(10);


// console.log(5 % 1);