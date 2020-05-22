/*
* 输出所有和为S的连续正数序列。序列内按照从小至大的顺序，序列间按照开始数字从小到大的顺序
* 示例：
* S = 10，连续正序列包含[[1,2,3,4], [10]]
* 思路：
* 准备快慢指针
* */

function FindContinuousSequence(sum)
{
  if(sum <= 0) return []
  let p1 = 1, p2 = 2;
  let result = [], curSum;
  while(p1 < p2) {
    curSum = (p2 - p1 + 1) * ((p2 + p1) / 2)    // 等差数列求和
    if(curSum < sum) {
      p2 ++
    }
    else if(curSum === sum) {
      let res = [], i = p1;
      while(i <= p2) {
        res.push(i++)
      }
      result.push(res)
      p1 ++
    }
    else {
      p1 ++
    }
  }
  return result
}
