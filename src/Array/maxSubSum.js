/**
 *  输入一个数组序列，求数组最大子序列和 
 *  如：输入[-1, 2, 3, 5, -2]，输出10
 */

function maxSubSum(arr) {
  const len = arr.length
  if(!len || !arr) return 0
  let max = 0, sum = 0
  for(let i = 0; i < arr.length; i ++) {
    sum += arr[i]
    if(sum < 0) {
      sum = 0
    }
    if(sum > max) {
      max = sum
    }
  }
  return max
}

console.log(maxSubSum([-1, 2, 0, -1, 3, -4, 5, -2]))