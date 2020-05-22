/**
 * 查找第 n 个括号中的内容
 * 
 * 示例：
 * web(dev(ni(cat(new))))， 查找出第 2 个括号的内容
 * 输出：ni(cat(new))
 * 
 * 思路：
 * 用一个 num 保存当前未被抵消的左括号数，并且每遇到一个左括号，用 hash 记录索引：
 * key 表示当前为第几个左括号，value 为索引，
 * 每遇到一个右括号，检查当前 num，如果为 n，直接取出第 n 个左括号的索引，得到结果，break
 * 如果不为 n，num --
 * 
 * @param {String} str 
 * @param {Number} n 
 */

function find(str, n) {
  let hash = {}
  let num = 0
  for(let i = 0; i < str.length; i ++) {
    if(str[i] === '(') {
      num ++
      hash[num] = i // 保存左括号(从 1 开始)的索引位
    } else if(str[i] === ')') {
      if(num === n) {
        console.log(str.slice(hash[n] + 1, i))
        break
      }
      num --
    }
  }
}


console.log(find("web(dev(ni(cat(new))))", 1))