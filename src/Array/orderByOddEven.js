/*
* 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
* 使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
* 并保证奇数和奇数，偶数和偶数之间的相对位置不变。
*
* 思路：插入排序，如果是奇数的话不断往前插，碰到奇数就返回。
* */

function reOrderArray(array)
{
  const len = array.length
  if(len < 2 || array === null) return array

  for(let i = 1; i < len; i ++) {
    if(isEven(array[i])) {
      continue
    } else {
      for(let j = i - 1; j >= 0; j --) {
        if(isEven(array[j])) {
          swap(array, j + 1, j)
        } else {
          break
        }
      }
    }
  }
  return array
}
function isEven(num) {
  return num % 2 === 0
}
function swap(arr, a, b) {
  const tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}
