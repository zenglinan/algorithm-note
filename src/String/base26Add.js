/**
 * 二十六进制加法，用 a ~ z 表示 0 ~ 25
 * 示例：'aaa' + 'bbb' === 'bbb'
 * 
 * 思路：每位转换成十进制相加，不存在则补0，保存每一位结果的时候转换成字母保存
 */

function bigLetterAdd(num1, num2) {
  let p1 = num1.length - 1,
      p2 = num2.length - 1,
      curry = 0, // 进位
      res = []
  while(p1 >= 0 || p2 >= 0) {
    let sum = curry
    sum += num1[p1] ? toNumber(num1[p1]) : 0  // 存在则转换成十进制相加，不存在则补 0
    sum += num2[p1] ? toNumber(num2[p2]) : 0
    p1 --
    p2 --
    res.unshift(toLetter(sum % 26)) // 将和取余的结果转换成字母保存
    curry = Math.floor(sum / 26)  // 保存进位
  }
  curry && res.unshift(toLetter(curry)) // 最高位进位
  return res.join("")
}

function toNumber(str) {
  const baseCharCodeAt = 'a'.charCodeAt()
  return str.charCodeAt() - baseCharCodeAt
}

function toLetter(num) {
  const baseCharCodeAt = 'a'.charCodeAt()
  return String.fromCharCode(num + baseCharCodeAt)
}

console.log(bigLetterAdd('zba', 'fbc'))