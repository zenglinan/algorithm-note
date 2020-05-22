/**
 * 根据每日 气温 列表，请重新生成一个列表，
 * 对应位置的输入是你需要再等待多久温度才会升高超过该日的天数。
 * 如果之后都不会升高，请在该位置用 0 来代替。
 * 
 * 示例：
 * 输入temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，
 * 输出 [1, 1, 4, 2, 1, 1, 0, 0]
 * 
 * 思路：
 * 方法1：循环数组，对于每个元素，找到下一个比他大的元素，索引相减计入数组
 * 方法2：对于[80, 70, 55, 60, 100] 这么一个数组，从80开始往后找比他大的元素，
 * 70 比后面两个都大，所以55、60的比较是无意义的，
 * 我们可以用一个辅助栈，来记录有意义的比较的数，去除无意义比较
 * 
 * 从后往前遍历，对于每个元素，不断比较栈顶存放的索引对应的元素是否小于等于该元素，
 * 如果是，将栈顶弹出，直到找到一个栈顶索引对应元素大于该元素，或者栈已经为空
 * 最后用栈顶减去当前索引，得到差值放入结果数组
 * 将当前索引放入栈顶
 * 
 * @param {number[]} T
 * @return {number[]}
 */

var dailyTemperatures = function(T) {
  let result = []

  for(let i = 0; i < T.length; i ++) {
    for(let j = i + 1; j < T.length; j ++) {
      if(T[j] > T[i]) {
        result[i] = j - i
        break
      }
    }
    !result[i] && (result[i] = 0)
  }
  
  return result
};


class Stack {
  constructor() {
    this.stack = []
  }
  peak() {
    return this.stack[this.stack.length - 1]
  }
  empty() {
    return this.stack.length === 0
  }
  push(i) {
    this.stack.push(i)
  }
  pop() {
    this.stack.pop()
  }
}


var dailyTemperatures = function(T) {
  let result = []
  let stack = new Stack()

  for(let i = T.length - 1; i >= 0; i --) {
    while(!stack.empty() && T[i] >= T[stack.peak()]) stack.pop()
    result[i] = stack.empty() ? 0 : stack.peak() - i
    stack.push(i)
  }

  return result
}