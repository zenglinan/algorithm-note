/*
* 【题目】 给定一个整型正方形矩阵matrix，请把该矩阵调整成 顺时针旋转90度的样子
* 【要求】 额外空间复杂度为O(1)。
*/

function rotateMatrix(arr) {
  let [aR, aC] = [0, 0],  // 左上角坐标
      [bR, bC] = [arr.length - 1, arr[0].length - 1]  // 右下角坐标
  while(aR < bR && aC < bC) {
    rotateProcess(arr, aR++, bR--, aC++, bC--)
  }
  return arr
}

function rotateProcess(arr, aR, bR, aC, bC) {
  let times = bC - aC
  for(let i = 0; i < times; i ++) {
    let temp = arr[aR][aC + i]
    arr[aR][aC + i] = arr[bR - i][aC]
    arr[bR - i][aC] = arr[bR][bC - i]
    arr[bR][bC - i] = arr[aR + i][bC]
    arr[aR + i][bC] = temp
  }
}

console.log(rotateMatrix([ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ],
				[ 13, 14, 15, 16 ] ]))
