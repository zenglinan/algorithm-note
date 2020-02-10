function selectSort(arr){
  const len = arr.length
  if(arr === null || len < 2) return arr

  for(let i = 0; i <= len - 2; i ++){
    let minIndex = i
    for(let j = i + 1; j <= len - 1; j ++){
      if(arr[j] < arr[minIndex]){
        minIndex = j
      }
    }
    swap(arr, i, minIndex)
  }
  
  return arr
}

function swap(arr, a, b){
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
    let arr1 = generateRandomArr(8, 100)
    let arr2 = copy(arr1)
    let arr3 = copy(arr1)
    
    selectSort(arr2)
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