function quickSort(arr) {
  const len = arr.length
  if(arr === null || len < 2) return arr

  sortProcess(arr, 0, len - 1)
}

function sortProcess(arr, l, r) {
  let stack = [r, l]
  while(stack.length) {
    let l = stack.pop()
    let r = stack.pop()
    if(l <= r) {
      const randomIdx = l + Math.round(Math.random() * (r - l))
      swap(arr, randomIdx, r)
      const equalIdx = partition(arr, l, r, arr[r]) // 得到相等区域的边界
      stack.push(equalIdx[0] - 1, l)
      stack.push(r, equalIdx[1] + 1)
    }
  }
}

function partition(arr, l, r, num) {
  let p1 = l,
      less = l - 1,
      more = r + 1
  while(p1 < more) {
    if(arr[p1] < num) {
      swap(arr, ++less, p1++)
    } else if(arr[p1] > num) {
      swap(arr, --more, p1)
    } else {
      p1++
    }
  }
  return [less + 1, more - 1]
}

function swap(arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
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

function isEqual(arr1, arr2){ // 数组长度、每个元素相同，两个数组才相同
  if(arr1 === arr2) { // null
    return true
  }
  if(arr1.length !== arr2.length){
    return false
  }
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false
    }
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

function rightSort(arr){
  arr.sort((a, b) => {
    return a-b
  })
}

// times: 测试次数
function test(times) {
  let success = true
  for(let i = 0; i < times; i++){
    let arr1 = generateRandomArr(80, 10000)
    let arr2 = copy(arr1)
    let arr3 = copy(arr1)
    
    quickSort(arr2)
    rightSort(arr3)
    if(!isEqual(arr2, arr3)){
      success = false
      console.log('error:')
      console.log(`原始值`, arr1)
      console.log(`测试值`, arr2)
      console.log(`绝对正确值`, arr3)
    }
  }
  if(success) console.log('OK')
}

test(20000)