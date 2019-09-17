/*
 * @Description: 
 * @Author: xiaoqi
 * @Date: 2019-09-16 21:33:19
 * @LastEditTime: 2019-09-17 12:39:55
 * @LastEditors: xiaoqi
 */
/**
 * @description: 
 * @param {String} str
 * @return: 
 */
function func (str) {
  let keyboard = {
    "1": [],
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  }

  // 需要两个序列，一个存已经遍历的，一个存最新的
  let already = keyboard[str[str.length - 1]] || [];
  for (let i = str.length - 2; i >= 0; i--) {
    let now = keyboard[str[i]];
    let temp = [];
    for (let j of now) {
      for (let k of already) {
        temp.push(j+k);
      }
    }
    already = temp;
  }

  console.log(already);
}

func('2345');