/*
* 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
* 示例：输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
* 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
*
* 思路：
* 方法1：排序后，取中间的元素，再遍历一遍检查是否是指定元素
* 方法2：如下，对第一个元素进行计数，遇到一个相同的就 ++，否则 --
* 减为 0 的时候换成新元素重新计数，对最后存活的元素，再遍历一遍数组进行检查。
* */

function MoreThanHalfNum_Solution(numbers)
{
  let num = numbers[0], count = 1;
  const len = numbers.length
  for(let i = 1; i < len; i ++) {
    // 每遇到一个不同的数,count--，遇到相同的则 ++
    if(numbers[i] !== num) {
      count --
    } else {
      count ++
    }
    // 减到 0 的时候重新置数
    if(count === 0) {
      num = numbers[i]
      count = 1
    }
  }
  // “如果存在”这个数，一定是最后的 num
  count = 0
  for(let i = 0; i < len; i ++) {
    if(num === numbers[i]) {
      count ++
    }
  }
  return count > len / 2 ? num : 0
}
