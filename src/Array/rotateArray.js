/**
 * 旋转数组
 * 
 * 输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
 * 输出: [5, 6, 7, 1, 2, 3, 4]
 * 解释:
 * 向右旋转 1 步: [7, 1, 2, 3, 4, 5, 6]
 * 向右旋转 2 步: [6, 7, 1, 2, 3, 4, 5]
 * 向右旋转 3 步: [5, 6, 7, 1, 2, 3, 4]
 */

function rotateArray(arr, k) {
  for(let i = 0; i < k; i ++) {
    arr.unshift(arr.pop())
  }
  return arr
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3))