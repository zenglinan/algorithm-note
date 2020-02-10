function mergeSort(arr) {
  const len = arr.length
  if(arr === null || len < 2) return arr

  sortProcess(arr, 0, len - 1)
  return arr
}

function sortProcess(arr, l, r) {
  if(l === r) return

  const mid = l + ((r - l) >> 1)
  sortProcess(arr, l, mid)
  sortProcess(arr, mid + 1, r)
  merge(arr, l, mid, r)
}

function merge(arr, l, mid, r) {
  let temp = []
  let p1 = l,
      p2 = mid + 1
  while(p1 <= mid && p2 <= r) {
    arr[p1] < arr[p2] ? temp.push(arr[p1++]) : temp.push(arr[p2++])
  }
  // 将剩余元素插入
  while(p1 <= mid) {
    temp.push(arr[p1++])
  }
  while(p2 <= r) {
    temp.push(arr[p2++])
  }
  // 将 temp 数组拷贝回原数组
  for(let i = 0; i < temp.length; i ++){
    arr[l+i] = temp[i]
  }
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
    let arr1 = generateRandomArr(20, 10000)
    let arr2 = copy(arr1)
    let arr3 = copy(arr1)
    
    mergeSort(arr2)
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

test(200000)