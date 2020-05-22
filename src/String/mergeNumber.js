/**
 * 给定一串数字，数字间空格隔开，将相邻的连续3个以上的数字整合
 * 输入: 1 2 3 5 7 8 10
 * 输出:1-3 5 7 8 10
 * 
 * 思路：准备两个快慢指针，三种情况：
 * 1. 后一位比前一位多1，p2 后移
 * 2. 后一位不比前一位多1了，比较 p2 - p1 ，看是否满足间距为 2 的条件
 * 3. 不满足上述条件，将 p1 到 p2 的值都输出，p1 移到 p2 位置
 * @param {String} str 
 */

function mergeNumber(str) {
  const arr = str.split(' ')
  let p1 = 0, p2 = 0
  let res = []
  while(p2 < arr.length) {
    if(arr[p2 + 1] - arr[p2] === 1) {
      p2 ++
    } else if(p2 - p1 >= 2) {
      res.push(`${arr[p1]}-${arr[p2]}`)
      p2 ++
      p1 = p2
    } else {
      while(p1 <= p2){
        res.push(arr[p1 ++])
      } 
      p2 ++
    }
  }
  return res.join(' ')
}
console.log(transfromDate("1 2 5 7 8 9"))