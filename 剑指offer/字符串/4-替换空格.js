function replaceSpace(str)
{
  // write code here
  // console.log(str);
  var res = str.replace(/\s/g, "%20");
  // console.log(res);
  return res;
}

var str = "We Are  Happy";

replaceSpace(str);