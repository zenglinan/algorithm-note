/*
* 把只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含质因子7。
* 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
*
* 思路：从 1 开始，每一个丑数乘上 2, 3, 5 都可以得到一个新的丑数
* 设立三个因数对应的指针，分别指向丑数数组 arr 的初始位置，
* 每轮循环，比较三个因数当前指针位置的数 * 因数，将小的那个因数指针前移
* 如果出现相同的丑数，指针都前移
* */
function GetUglyNumber_Solution(index)
{
  if(index < 7) return index
  let p2 = 0, p3 = 0, p5 = 0,
      curNum = 1,
      arr = [1]
  while(arr.length < index) {
    let p2Mul = arr[p2] * 2,
        p3Mul = arr[p3] * 3,
        p5Mul = arr[p5] * 5
    curNum = Math.min(p2Mul, p3Mul, p5Mul)
    arr.push(curNum)
    if(curNum === p2Mul) {
      p2 ++
    }
    if(curNum === p3Mul) {
      p3 ++
    }
    if(curNum === p5Mul) {
      p5 ++
    }
  }
  return curNum
}