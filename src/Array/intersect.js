/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 示例 1:
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出: [2,2]
 *
 * 思路：哈希法
 */

function intersect(arr1, arr2) {
  const hash = {}
  let count = 0
  arr1.forEach(i => !hash[i] && (hash[i] = true))
  arr2.forEach(i => hash[i] && (arr1[count++] = i))
  return arr1.slice(0, count)
}

console.log(intersect([1, 2, 3, 1], [2, 1]))

/**
 * 进阶：数组有序
 * 示例 1:
 * 输入: nums1 = [1,2,3,4], nums2 = [2,4]
 * 输出: [2，4]
 *
 * 思路：双指针，谁小移谁，直到某一数组遍历完成
 */
function intersect2(arr1, arr2) {
  let p1 = 0, p2 = 0
  let result = []
  while(p1 < arr1.length && p2 < arr2.length) {
    const i1 = arr1[p1],
          i2 = arr2[p2]
    if (i1 === i2) {
      result.push(i1)
      p1++
    } else if (i1 > i2) {
      p2 ++
    } else if (i1 < i2) {
      p1 ++
    }

  }
  return result
}
console.log(intersect2([2, 2, 3, 7], [1, 2, 4]))
