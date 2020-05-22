/**
 * 判断括号的合法性
 * 
 * 思路：设置一个 count 计数，碰到左括号 ++，右括号 --，出现小于 0 的时候直接返回 false
 * 如果最后结果 <，返回 false
 * @param {String} str 
 */

function judge(str) {
  let count = 0 // 左括号和右括号的差值
  for(let i = 0; i < str.length; i ++) {
    if(str[i] === '(') count ++
    else if(str[i] === ')') count --
    if(count < 0) return false
  }
  return count === 0
}

console.log(judge("(())("))