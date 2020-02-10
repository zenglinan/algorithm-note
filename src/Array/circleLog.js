/* 转圈打印矩阵 【题目】 给定一个整型矩阵matrix，请按照转圈的方式打印它。
* 例如：
* 1  2  3  4
* 5  6  7  8
* 9  10 11 12
* 13 14 15 16
*
* 打印结果为：1，2，3，4，8，12，16，15，14，13，9， 5，6，7，11， 10
* 【要求】 额外空间复杂度为O(1)。
*
* 思路：设定两个点 (aR, aC) (bR, bC)
* 从 aC -> bC，aR + 1 -> bR，bC - 1 -> aC，bR - 1 -> aR + 1，循环打印
* 将两个点往内圈移动，直到 aR > bR 或 aC > bC，退出循环。
*/

function printMatrix(matrix)
{
  let res = []
  if(matrix === null || !matrix.length || !matrix[0].length) return res
  let aR = 0, aC = 0,
      bR = matrix.length - 1, bC = matrix[0].length - 1
  while(aR <= bR && aC <= bC) {
    for(let i = aC; i <= bC; i ++) {
      res.push(matrix[aR][i])
    }
    for(let i = aR + 1; i <= bR; i ++) {
      res.push(matrix[i][bC])
    }
    if(bR !== aR) {
      for(let i = bC - 1; i >= aC; i --) {
        res.push(matrix[bR][i])
      }
    }
    if(aC !== bC) {
      for(let i = bR - 1; i > aR; i --) {
        res.push(matrix[i][aC])
      }
    }
    aR ++
    aC ++
    bR --
    bC --
  }
  return res
}
