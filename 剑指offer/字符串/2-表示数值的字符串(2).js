//s字符串
function isNumeric(s)
{
  // write code here
  let lex = new Lexer();

  try {
    for (let c of s) {
      lex.receiveInput(c);
    }
  } catch (error) {
    return false;
  }
  return true;
}

class Lexer {
  constructor() {
    this.state = this.data;
  }

  receiveInput(char) {
    if (!this.state) {
      throw new Error('error');
    } else {
      this.state = this.state(char);
    }
  }

  // 入口
  data(char) {
    if (char === '+') {
      return this.positiveNumber;
    }

    if (char === '-') {
      return this.negativeNumber;
    }

    if (/[0-9]/.test(char)) {
      return this.number;
    }
  }

  // 读取+后
  positiveNumber(char) {
    if (/[0-9]/.test(char)) {
      return this.number;
    }
  }

  // 读取-后
  negativeNumber(char) {
    if (/[0-9]/.test(char)) {
      return this.number;
    }
  }

  // 读取Number后
  number(char) {
    if (/[0-9]/.test(char)) {
      return this.number;
    }

    if (char === '.') {
      return this.decimalPoint;
    }

    if (char === 'e' || char === 'E') {
      return this.e;
    }
    // 此时如果是 +100 已经解析完毕了
  }
}


var res1 = isNumeric("+10a0");
console.log(res1);