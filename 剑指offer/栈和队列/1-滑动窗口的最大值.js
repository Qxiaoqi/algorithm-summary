function maxInWindows(num, size)
{
  // 双端队列（两端都可以实现插入和删除）
  // 队列首位永远是最大值
  // 每次进来一个数，依次和前面的数比较，如果进来的数大，则前面的数直接弹出（在后面不可能最大）
  // 如果进来的数小，则比较下标，下标不存在的将其删除

  // 数组实现双端队列，arr存的是下标，arr[0]存最大值下标
  var arr = [];
  // 结果数组
  var res = [];

  if (size === 0) {
    return res;
  }

  for (var i = 0; i < num.length; i++) {
    // 从第一个开始循环（可以理解成滑动窗口右侧从第一个移动到最后一个）
    // 进来一个数，依次从最后一个数开始比较
    while (arr.length > 0 && num[i] > num[arr[arr.length-1]]) {
      // 如果进来的数比最后一个大，则将最后一个踢出去，pop
      arr.pop();
    }
    arr.push(i);

    // 再判断前面的数是否超了，由于每次进来的数如果更大，则将前面的踢出去，导致arr[0]的下标永远在最前面
    if (i - arr[0] + 1 > size) {
      arr.shift();
    }
    if (i >= size - 1) {
      res.push(num[arr[0]]);
    }
  }
  return res;
}

var res = maxInWindows([2,3,4,2,6,2,5,1], 3);
console.log(res);