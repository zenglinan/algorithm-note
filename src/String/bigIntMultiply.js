/**
 * 给定两个大数字符串，输出相乘结果（leetcode 43）
 * @param {String} s1 
 * @param {String} s2 
 * @return {String}
 */

// tips：https://leetcode-cn.com/problems/multiply-strings/solution/you-hua-ban-shu-shi-da-bai-994-by-breezean/
function bigIntMul(s1, s2) {
  const len1 = s1.length,
        len2 = s2.length
  if(s1 === '0' || s2 === '0') return '0'
  let res = []
  // 从后往前遍历每一位
  for(let i = len1 - 1; i >= 0; i --) {
    for(let j = len2 - 1; j >= 0; j --) {
      let sum = (res[i + j + 1] || 0) + s1[i] * s2[j] // i 位和 j 位之间相乘，加到 i + j + 1 位上
      res[i + j + 1] = sum % 10
      // 如果上一位（进位）未初始化，直接初始化，如果有值则进行相加
      res[i + j] = !res[i + j] ? Math.floor(sum / 10) : res[i + j] + Math.floor(sum / 10) 
    }
  }
  res = res.join('')
  return res[0] === '0' && res.length > 1 ? res.slice(1) : res
}

console.log(bigIntMul("5", "12"))