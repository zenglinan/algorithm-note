/**
 * 判断一个数是不是质数 / 素数
 * @param {Number} num 
 */

function isPrimeNumber(num) {
  if(num === 1 || num === 2) return true
  for(let i = 2; i <= Math.pow(num, 0.5); i ++) {
    if(num % i) return false
  }
  return true
}
console.log(isPrimeNumber(3))