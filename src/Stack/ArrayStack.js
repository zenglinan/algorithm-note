/* 用两个数组构建栈
*/
class ArrayStack {
  constructor(len) {
    this.maxLen = len
    this.stack = []
    this.index = 0
    this.curLen = 0
  }
  push(obj) {
    if(this.index === this.maxLen) {
      throw new Error(`Stack is full`)
    }
    this.stack[this.index++] = obj
    this.curLen ++
  }
  pop() {
    if(this.index === 0) {
      throw new Error(`Stack is empty`)
    }
    const ele = this.stack[--this.index]
    delete this.stack[this.index]
    this.curLen --
    return ele
  }
  peak() {
    if(this.index === 0) {
      throw new Error(`Stack is empty`)
    }    
    return this.stack[this.index - 1]
  }
}
module.exports = ArrayStack

// for test
// let stack = new ArrayStack(4)
// stack.push(3)
// stack.push(4)
// stack.push(4)
// stack.push(4)
// console.log(stack.peak())
// stack.pop()
// console.log(stack)

