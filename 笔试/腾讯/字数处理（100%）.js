#!/usr/bin/env node
/*
 * @Description: 
 * @Author: xiaoqi
 * @Date: 2019-09-20 21:06:43
 * @LastEditTime: 2019-09-20 21:06:53
 * @LastEditors: xiaoqi
 */

const buff = [];
const lString = function(str, limit, lastMsg){
  if (!lastMsg) {
    lastMsg = "\n\nToo large to show...";
  }

  if (limit < lastMsg.length) {
    throw Error(`限制的长度应该大于 ${lastMsg.length}`);
  }

  // TODO...
  
  // return str.slice(0, limit - lastMsg.length) + lastMsg;
  return str;
}

process.stdin.on('data', (data) => {
  buff.push(data)
});

process.stdin.once('end', () => {
  const str = Buffer.concat(buff).toString('UTF-8');
  const lastMsg = "\n\nToo large to show...";
  
  // 测试用例按248代替2048准备，请保持参数不变
  const res = lString(str,248,lastMsg);
  process.stdout.write(res);
});