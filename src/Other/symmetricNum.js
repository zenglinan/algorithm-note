/**
 * 找出 1 ~ 输入数 之间的所有对称数，输入数 > 10
 * 
 * 思路：找出输入数的位数，比如最大位数是5，对称数可以拆解成 
 * // 特殊处理的情况
 * 1 ~ 9
 * 11 * i
 * 
 * // 以下都是通过两个基数得到的
 * 101 * i + 10 * j
 * 1001 * i + 110 * j
 * 10001 * i + 1110 * j
 * 所以需要一轮循环得到两个基数，然后内层两个循环 i(1~9) j (0~9)，就可以遍历所有对称的情况了。
 * @param {Number} max 
 */


function symmetricNum(max) {

  let maxLen = max.toString().length  // 最大数的位数
  let result = []
  for(let i = 1; i <= maxLen - 2; i ++) {
    let {base1, base2} = generateBase(i)  // 得到两个基数
    for(let j = 1; j <= 9; j ++) {
      
      for(let k = 0; k <= 9; k++) {
        let num = base1 * j + base2 * k // 得到对称数
        if(num <= max) {
          result.push(num)
        }
      }
    }
  }

  for(let i = 9; i >= 1; i --) {  // 11 ~ 99 的情况
    let base = 11
    let num = base * i
    if(num < max) {
      result.unshift(num)
    }
  }
  // 最后拼接 1 ~ 9 的情况
  return [1,2,3,4,5,6,7,8,9].concat(result)
}

// 构造两个基数
function generateBase(n) {
  return {
    base1: +`1${"".padStart(n, "0")}1`,
    base2: +`${"".padStart(n, "1")}0`
  }
}

console.log(symmetricNum(200))