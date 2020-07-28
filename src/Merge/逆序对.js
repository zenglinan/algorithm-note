/**
 * 找出数组中所有的逆序对（左边的数大于右边的时候，两个数组成逆序对）
 * 
 * @param {Array} arr 
 */

// 用归并排序的 merge 过程，期间：左半区的p1数大于右半区p2数时，说明此时p1后面的数都能和p2数组成逆序对。
function reversePair(arr) {
  const len = arr.length
  if(arr === null || len < 2) {
    return []
  }

  return sortProcess(arr, 0, len - 1)
}

function sortProcess(arr, l, r) {
  if(l === r) return []

  const mid = Math.floor(l + ((r - l) >> 1))
  const pair1 = sortProcess(arr, l, mid)
  const pair2 = sortProcess(arr, mid + 1, r)
  const pair3 = merge(arr, l, mid, r)
  return mergePair(pair1, pair2, pair3)
}

function mergePair(pair1, pair2, pair3) { // 拼接三个逆序对数组
  return [...pair1, ...pair2, ...pair3]
}

function merge(arr, l, mid, r) {
  let temp = []
  let p1 = l,
      p2 = mid + 1
  let pair = [] // 存放逆序对的数组
  while(p1 <= mid && p2 <= r) {
    if(arr[p1] > arr[p2]) {
      // p1 到 mid 的数都能和 p2 组成逆序对
      for(let i = p1; i <= mid; i ++) {
        pair.push(`${arr[i]}, ${arr[p2]}`)
      }
      temp.push(arr[p2++])
    } else {
      temp.push(arr[p1++])
    }
  }
  // 将剩余数填入 temp
    while(p1 <= mid) {
      temp.push(arr[p1++])
    }
  
  while(p2 <= r) {
    temp.push(arr[p2++])
  }
  for(let i = 0; i < temp.length; i ++) {
    arr[l + i] = temp[i]
  }
  return pair
}
// for test

// 生成随机长度，元素随机的数组
function generateRandomArr (size, value){
  const len = Math.round(Math.random() * size)
  let arr = []
  for(let i = 0; i < len; i++){
    arr[i] = Math.round(Math.random() * value) - Math.round(Math.random() * value)
  }
  return arr
}

function isEqual(pair1, pair2){ // 两个逆序对数组：长度相同，且测试数组的每个元素在绝对正确数组都有，此时判定相等
  if(pair1.length !== pair2.length) {
    return false
  }
  for(let i = 0; i < pair1.length; i ++) {
    if(!pair2.includes(pair1[i])) return false
  }
  return true
}

function copy(arr){
  if(arr === null) return arr
  let copyArr = []
  for(let i = 0; i < arr.length; i ++){
    copyArr[i] = arr[i]
  }
  return copyArr
}

function rightMethod(arr){
  const pair = []
  for(let i = 1; i < arr.length; i ++) {
    for(let j = 0; j < i; j ++) {
      if(arr[j] > arr[i]) {
        pair.push(`${arr[j]}, ${arr[i]}`)
      }
    }
  }
  return pair
}

// times: 测试次数
function test(times) {
  let success = true
  for(let i = 0; i < times; i++){
    let arr1 = generateRandomArr(10, 1000)
    let arr2 = copy(arr1)
    let arr3 = copy(arr1)
    
    let pair1 = reversePair(arr2)
    let pair2 = rightMethod(arr3)
    if(!isEqual(pair1, pair2)){
      success = false
      console.log('error:')
      console.log(`原始值`, arr1)
      console.log(`测试值`, pair1)
      console.log(`绝对正确值`, pair2)
      console.log('\n')
    }
  }
  if(success) console.log('OK')
}

test(400)