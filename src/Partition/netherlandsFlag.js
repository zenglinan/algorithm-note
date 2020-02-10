function partition(arr, l, r, num) {
  let less = l - 1,
      more = r + 1,
      p1 = l
  while(p1 < more) {
    if(arr[p1] < num) {
      swap(arr, ++less, p1++)
    } else if(arr[p1] > num) {
      swap(arr, --more, p1)
    } else {
      p1++
    }
  }
}

function swap(arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}