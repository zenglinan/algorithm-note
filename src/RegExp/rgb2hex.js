/**
 * 将 RGB 字符串转成十六进制
 * 
 * 思路：利用 number 类型的 toString 方法可以传入进制，直接进行转换
 * 注：不满两位的十六进制数进行补 0
 * @param {String} sRGB 
 */


function rgb2hex(sRGB) {
  let reg = /([\d]+),?/g
  let matchArr = [...sRGB.matchAll(reg)] // 取出所有捕获组
  return matchArr.reduce((pre, cur) => {
      return pre + `0${(+cur[1]).toString(16)}`.slice(-2)
  }, "#")
}