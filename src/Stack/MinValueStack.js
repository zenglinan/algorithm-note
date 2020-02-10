/* 实现一个特殊的栈，在实现栈的基本功能的基础上，再实现返 回栈中最小元素的操作
* 
* 【要求】
* 1．pop、push、getMin操作的时间复杂度都是O(1)。
*/

const Stack = require('./ArrayStack.js')
class MinValueStack {
  constructor(len) {
    this.dataStack = new Stack(len)
    this.minValStack = new Stack(len)
    this.curlen = 0
    this.maxLen = len
  }
  push(obj) {
    if(!this.curlen) {
      this.minValStack.push(obj)
    } else {
      let min = this.minValStack.peak()
      this.minValStack.push(obj < min ? obj : min)
    }
    this.dataStack.push(obj)
    this.curlen ++
  }
  pop() {
    this.dataStack.pop()
    this.minValStack.pop()
  }
  getMin() {
    return this.minValStack.peak()
  }
}

// for test
let stack = new MinValueStack(3)
stack.push(2)
stack.push(5)
stack.push(6)
console.log(stack.getMin())

console.log(stack)