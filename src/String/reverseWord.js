/**
 * 给定一个字符串，逐个翻转字符串中的每个单词。
 * 
 * 示例：
 * 输入: "the sky is blue"
 * 输出: "blue is sky the"
 * 
 * 思路：
 * 方法1：先去掉单词前后空格，从后往前遍历，用两个指针去匹配单词，把每个单词放进数组中，输出
 * 方法2：用正则匹配单词，unshift 进数组，输出
 */

 // 方法1：从后往前搜索单词放入数组
var reverseWords = function(s) {
  s = s.trim()
  let len = s.length
  let res = []
  let p1 = len - 1,
      p2 = len
  while(p1 > 0) {
    if(s[p1] === ' ') {
      res.push(s.slice(p1 + 1, p2))
      while(s[p1] === ' ') {
        p1 --
      }
      p2 = p1 + 1
    } else {
      p1 --
    }
  }
  res.push(s.slice(p1, p2))
  return res.join(' ')
};

// 方法2：正则匹配
var reverseWords = function(s) {
  let reg = /([\S]+)/g
  let res = []
  let matchArr = [...s.matchAll(reg)]
  matchArr.map(item => {
    return (res.unshift(item[1]))
  })
  return res.join(' ')
}