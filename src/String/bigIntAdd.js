/**
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let carry = 0, // 进位
      res = [],  // 结果数组
      i = num1.length - 1, j = num2.length - 1
  while(i >= 0 || j >= 0) { // 只要有一个数还没加完就继续加
    let sum = carry // 初始化为上一次的进位
    sum += i >= 0 ? +num1[i] : 0  // 如果 i < 0，这时索引变为负，补0
    sum += j >= 0 ? +num2[j] : 0
    res.unshift(sum % 10)
    carry = Math.floor(sum / 10)
    i --
    j --
  }
  if(carry) { // 最高位有进位
    res.unshift(1)
  }
  res = res.join("")
  return res[0] === '0' && res.length > 1 ? res.slice(1) : res
};