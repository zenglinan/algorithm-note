/**
 * 以 - 为分隔符，将第二个起的非空单词首字母转为大写
 * 示例：-webkit-border-image 转换后的结果为 webkitBorderImage
 * 
 * 思路：先把匹配 -字母 的情况，最后再判断开头是否有 -
 * @param {String} sName 
 */

function cssStyle2DomStyle(sName) {
  let reg = /(?!^)(-\w{1})/g
  sName = sName.replace(reg, s => s.slice(1).toUpperCase())
  return sName[0] === '-' ? sName.slice(1) : sName
}