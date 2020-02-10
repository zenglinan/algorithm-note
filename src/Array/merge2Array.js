/*
* 将两个有序数组合并成一个数组
* 要求：in-place
* */

function merge2Array(arr1, arr2) {
  let p = arr1.length + arr2.length - 1,
      p1 = arr1.length - 1,
      p2 = arr2.length - 1

  while(p1 >= 0 && p2 >= 0) {
    arr1[p--] = arr2[p2] > arr1[p1] ? arr2[p2--] : arr1[p1--]
  }
  while(p2 >= 0) {
    arr1[p--] = arr2[p2--]
  }
  return arr1
}
console.log(merge2Array([1,2,3,6,9,12], [3,5,6,7,8]))
