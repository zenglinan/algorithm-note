/**
 * 查找字符串数组中的最长公共前缀。如果不存在公共前缀，则返回 " "
 * 示例 1:
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 * 思路：以第一个字符串为基准，不断往后对比，更新前缀，最后得出的结果便是所有元素的公共前缀
 */
function longestCommonPrefix(strArr) {
  let prefix = strArr[0]
  strArr.slice(1).forEach(s => {
    prefix = findCommonPrefix(prefix, s)
  })
  return prefix
}

// 得出两字符串的最长公共前缀
function findCommonPrefix(str1, str2) {
  while(str1 !== str2.slice(0, str1.length)) {
    if (str1.length === 0) break
    str1 = str1.slice(0, str1.length - 1)
  }
  return str1
}

console.log(longestCommonPrefix(["flower","flow","flight"]))
