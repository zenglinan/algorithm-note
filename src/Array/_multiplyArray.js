/*
* 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],
* 其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
*
* 思路：https://uploadfiles.nowcoder.com/images/20160829/841505_1472459965615_8640A8F86FB2AB3117629E2456D8C652
* */


function multiply(array)
{
  const len = array.length
  let b = [1]
  // 左半角
  for(let i = 1; i < len; i ++) {
    b[i] = b[i - 1]
    b[i] *= array[i - 1]
  }
  // 右半角
  let mul = 1
  for(let i = len - 2; i >= 0; i --) {
    mul *= array[i + 1]
    b[i] *= mul
  }
  return b
}
