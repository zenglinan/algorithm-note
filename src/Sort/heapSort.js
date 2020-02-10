function heapSort(arr) {
  const len = arr.length
  if(arr === null || len < 2) return

  // 建立大根堆
  for(let i = 1; i < len; i ++) {
    heapInsert(arr, i)
  }

  // 循环弹出堆顶，进行 heapify
  let size = len
  while(size > 0) {
    swap(arr, 0, --size)
    heapify(arr, size)
  }
}

function heapInsert(arr, index) {
  let parIdx
  while(arr[index] > arr[parIdx = Math.floor((index - 1)/2)]) {
    swap(arr, index ,parIdx)
    index = parIdx
    if(index <= 0) return
  }
}

function heapify(arr, size) {
  let index = 0, left
  while((left = 2 * index + 1 ) < size) {
    let largestIdx = left + 1 < size && arr[left + 1] > arr[left]
                      ? left + 1
                      : left
    largestIdx = arr[index] > arr[largestIdx] ? index : largestIdx
    if(largestIdx === index) {
      break
    }
    swap(arr, index, largestIdx)
    index = largestIdx
  }
}

function swap(arr, a, b) {
  let tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
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
    let arr1 = generateRandomArr(200, 1000)
    let arr2 = copy(arr1)
    let arr3 = copy(arr1)
    
    heapSort(arr2)
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