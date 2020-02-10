/*
* 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
* 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
* 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。
*
* 思路，分三种情况：
* 1. 数组为空
* 2. 数组完全旋转，返回第一个元素
* 3. 部分旋转，找出后一个比前一个小的元素
* */


function minNumberInRotateArray(rotateArray)
{
  const len = rotateArray.length
  if(rotateArray === null || len === 0) return 0
  for(let i = len - 1; i > 0; i --) {
    if(rotateArray[i] < rotateArray[i - 1]) {
      return rotateArray[i]
    }
  }
  return rotateArray[0]
}
