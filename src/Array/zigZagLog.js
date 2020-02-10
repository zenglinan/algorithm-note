/*
* 【题目】 给定一个矩阵matrix，按照“之”字形的方式打印这 个矩阵
* 例如  1  2  3  4
*       5  6  7  8
*       9  10 11 12
*       13 14 15 16
* 打印顺序为 1，2，5，9，6，3，4，7，10，11，8，12
* 【要求】 额外空间复杂度为O(1)。
*/

function zigZagLog(arr) {
  let maxCol = arr[0].length - 1,
      maxRow = arr.length - 1
  let a = { r: 0, c: 0 }, // 起始两个点的坐标
      b = { r: 0, c: 0 }
  let mode = 1  // 斜线打印的顺序，0为上到下，1位下到上
  log(arr[0][0])
  while(a.r <= maxRow) {
    mode = !mode
    if(a.c < maxCol) {
      a.c ++
    } else {
      a.r ++
    }

    if(b.r < maxRow) {
      b.r ++
    } else {
      b.c ++
    }
    printZigZag(arr, mode, a.r, a.c, b.r, b.c)
  }
}

function printZigZag(arr, mode, aR, aC, bR, bC) {
  if(mode) {  // 从下到上打印
    while(bR >= aR) {
      log(arr[bR--][bC++])
    }
  } else if(!mode) {
    while(bR >= aR) {
      log(arr[aR++][aC--])
    }
  }
}

function log(val) {
  console.log(val)
}

zigZagLog([ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ] ])