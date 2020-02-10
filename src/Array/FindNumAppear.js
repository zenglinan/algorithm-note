/*
* 统计一个数字在排序数组中出现的次数。
*
* 思路：
* 方法1：二分查找，找出数字出现的最后索引和起始索引
* 方法2：遍历数组，找到这个元素后开始计数
* */

function GetNumberOfK(data, k)
{
  const len = data.length
  if(len === 0 || data === null) return 0
  const start = findStartIndex(data, k, 0, len - 1)
  const end = findEndIndex(data, k, 0, len - 1)
  if(start !== -1 && end !== -1){
    return end - start + 1;
  }
  return 0;
}

function findStartIndex(arr, k, l, r) {
  let mid = Math.floor((l + r) / 2)
  while(l <= r) {
    if(arr[mid] > k) {
      r = mid - 1
    } else if (arr[mid] < k) {
      l = mid + 1
    } else if (mid - 1 >= 0 && arr[mid - 1] === k) {
      r = mid - 1
    } else {
      return mid
    }
    mid = Math.floor((l + r) / 2)
  }
  return -1
}

function findEndIndex(arr, k, l, r) {
  let mid = Math.floor((l + r) / 2)
  while(l <= r) {
    if(arr[mid] > k) {
      r = mid - 1
    } else if (arr[mid] < k) {
      l = mid + 1
    } else if (mid + 1 < arr.length && arr[mid + 1] === k) {
      l = mid + 1
    } else {
      return mid
    }
    mid = Math.floor((l + r) / 2)
  }
  return -1
}
