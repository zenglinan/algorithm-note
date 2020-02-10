/*
* 一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。
*
* 思路：遍历数组元素进行异或，得到的数为所招两个数的异或的结果
* 对这个数，从后往前查找第一个为 1 的位，说明所求两个数在这一位的值不一样
* 根据这个位来进行划分数组，两部分分别异或，得到所求两个数字。
* */

// 注意的坑：(res & 1) === 0 因为优先级，括号不能省略

function FindNumsAppearOnce(array)
{
  // 每个数字异或
  let res = array[0]
  for(let i = 1, len = array.length; i < len; i ++) {
    res ^= array[i]
  }
  // 找出 res 第一个为 1 的位
  let bit = findBit(res)
  // 按照第 bit 位来划分数组
  let num1, num2;
  for(let i = 0, len = array.length; i < len; i ++) {
    if(isBit(array[i], bit)) {
      if(!num1) num1 = array[i]
      else {
        num1 ^= array[i]
      }
    } else {
      if(!num2) num2 = array[i]
      else {
        num2 ^= array[i]
      }
    }
  }
  return [num1, num2]
}

function findBit(res) {
  let bit = 0
  while((res & 1) === 0) {
    res = res >> 1
    bit ++
  }
  return bit
}
function isBit(num, bit) {
  num = num >> bit
  return num & 1 === 1
}
