/**
 * 将数组中的 0 移到数组末尾，保证非 0 元素的相对顺序
 * 
 * 思路：遇到 0 时，push 0，并裁剪当前元素
 * 需要注意的是：裁剪完后 当前遍历指针和遍历终点都需要--
 */

function move0 (arr) {
  for(let i = 0, j = arr.length; i < j; i ++) {
    if(arr[i] === 0) {
      arr.push(0)
      arr.splice(i, 1)
      i --
      j --
    }
  }
  return arr
}

console.log(move0([1,0,2,3,0,4,5,6,0,0]))