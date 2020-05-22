/**
 * 输入行数，输出杨辉三角
 * 
 * 思路：每行首尾都是 1，中间的值是上一行的两两相加，上一行数组从0位遍历到倒数第二位的个数就是下一行中间的个数。
 * @param {Number} num 
 */

 // 非递归
function f(num) {
  let result = [[1]]

  for(let i = 2; i <= num; i ++) {
    
    let res = [1]
    for(let j = 0; j < i - 2; j ++) {
      res.push(result[i-2][j] + result[i-2][j+1])
    }
    res.push(1)
    result.push(res)
  }
  return result
}

// 递归
function f(num) {
  if(num === 1) return [1]

  let res = [1]
  let last = f(num - 1)
  for(let i = 0; i < last.length - 1; i ++) {
    res.push(last[i] + last[i + 1])
  }
  res.push(1)

  return res
}
console.log(f(5))