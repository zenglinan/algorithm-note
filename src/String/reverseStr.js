/**
 * 翻转字符串（递归版）
 * 
 * 思路：每次取首位字符放在最后，将剩余字符串进行递归
 * 
 * @param {String} str 
 */

function f(str) {
  if(str === "") return ""

  let s1 = str.slice(0, 1),
      s2 = str.slice(1) // 剩余字符串

  return `${f(s2)}${s1}`
}

console.log(f("abcdefgh"))