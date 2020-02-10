/*
* 【题目】 给定一个有N*M的整型矩阵matrix和一个整数K， matrix的行和列都是升序排列的。
* 实现一个函数，判断 num 是否在matrix中。
*/

function findInMatrix(arr, num) {
  let aR = 0,
      aC = arr[0].length - 1
  while(aR <= arr.length - 1 && aC >= 0) {
    if(arr[aR][aC] < num) {
      aR ++
    } else if(arr[aR][aC] > num) {
      aC --
    } else {
      return true
    }
  }
  return false
}

console.log(findInMatrix([[0, 1, 2, 5], [2, 3, 4, 7], [4, 4, 4, 8], [5, 7, 7, 9]], 40))