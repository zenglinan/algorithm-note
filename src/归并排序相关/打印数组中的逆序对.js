// 在一个数组中，左边的数如果比右边的数大，则这两个数构成一个逆序对，打印所有逆序对。

// 思路：与小和问题类似，都是在归并排序的 merge 过程中，进行额外的操作。当 arr[p1] > arr[p2] 时，说明左子块中 p1 右边的数都比 arr[p2] 大，都可以构成逆序对，此时，遍历 p1~m，打印出逆序对。

function printReversePair(arr){
  const len = arr.length
  if(arr === null || len < 2) return 
  mergeSort(arr, 0, len - 1)
}

function mergeSort(arr, l, r){
  if(l === r) return 

  const mid = Math.floor(l + ((r - l) >> 1))
  mergeSort(arr, 0, mid)
  mergeSort(arr, mid + 1, r)
  merge(arr, l, mid, r)
}

function merge(arr, l, m, r){
  let p1 = l, p2 = m + 1
  let temp = [], i = 0
  
  while(p1 <= m && p2 <= r){
    if(arr[p1] > arr[p2]){
      for(let j = p1; j <= m; j++){
        print(arr[j], arr[p2])
      }
      temp[i++] = arr[p2++]
    } else {
      temp[i++] = arr[p1++]
    }
  }

  while(p1 <= m){
    temp[i++] = arr[p1++]
  }
  while(p2 <= r){
    temp[i++] = arr[p2++]
  }

  for(let i = 0, len = temp.length; i < len; i++){
    arr[l + i] = temp[i]
  }
}

function print(a, b){
  console.log(`(${a}, ${b})`)
}