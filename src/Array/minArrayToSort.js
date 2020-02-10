/*
* 给定一个数组，找出其需要排序的最小子数组
* 示例：给定数组[1, 5, 4, 3, 2, 6, 7]
* 需要排序的最小子数组为[5, 4, 3, 2]
* */

function minArrayToSort(arr) {
  let left, right;
  let p = 0
  while(p < arr.length - 1) {
    if(arr[p] > arr[p + 1]) {
      right = p + 1
    }
    p ++
  }
  p = arr.length - 1
  while(p >= 1) {
    if(arr[p] < arr[p - 1]) {
      left = p - 1
    }
    p --
  }
  return [left, right]
}
