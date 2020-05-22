/**
 * 找出数组相邻元素差值的最大值
 * 示例：[1,2,3,6,11,13]
 * 结果：5
 * @param {Array} arr 
 */

function maxGap(arr) {
  // 找出最大值、最小值
  // 初始化首桶、末桶
  // 遍历数组，找出当前元素对应的桶，桶内只保留最大值、最小值、是否有存数的标志位
  // 遍历，找出相邻桶差值，得到差值最大值
  const len = arr.length
  if(arr === null || len < 2) return 0

  let max = Number.MIN_SAFE_INTEGER,
      min = Number.MAX_SAFE_INTEGER
  for(let i = 0; i < len; i ++) {
    max = arr[i] > max ? arr[i] : max
    min = arr[i] < min ? arr[i] : min
  }
  if(max === min) {
    return 0
  }

  let mins = [min], maxs = [min], hasNum = [true]
      mins[len] = max, maxs[len] = max, hasNum[len] = true
  for(let i = 0; i < len; i ++) {
    let bucketIdx = getBucket(min, max, len + 1, arr[i])
    mins[bucketIdx] = hasNum[bucketIdx] && mins[bucketIdx] < arr[i] ? mins[bucketIdx] : arr[i]
    maxs[bucketIdx] = hasNum[bucketIdx] && maxs[bucketIdx] > arr[i] ? maxs[bucketIdx] : arr[i]
    hasNum[bucketIdx] = true
  }

  let res = 0
  let lastMax = maxs[0]
  for(let i = 1; i <= len; i ++) {
    if(hasNum[i]) {
      res = mins[i] - lastMax > res ? mins[i] - lastMax : res
      lastMax = maxs[i]
    }
  }
  return res
}

function getBucket(min, max, len, num) {
  return Math.floor((num - min) * len / (max - min))
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

function rightMethod(arr){
  arr.sort((a, b) => {
    return a-b
  })
  let res = 0,
      last = arr[0]

  for(let i = 1; i < arr.length; i ++) {
    res = arr[i] - last > res ? arr[i] - last : res
  }
  return res
}

// times: 测试次数
function test(times) {
  let success = true
  for(let i = 0; i < times; i++){
    let arr1 = generateRandomArr(200, 1000)
    let arr2 = copy(arr1)
    let arr3 = copy(arr1)

    let res1 = maxGap(arr2)
    let res2 = rightMethod(arr3)
    if(!isEqual(res1, res2)){
      success = false
      console.log('error:')
      console.log(`原始值`, arr1)
      console.log(`测试值`, res1)
      console.log(`绝对正确值`, res2)
    }
  }
  if(success) console.log('OK')
}

test(40000)
