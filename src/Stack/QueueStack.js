const Queue = require('../Queue/ArrayQueue')
class QueueStack {
  constructor(len) {
    this.dataQueue = new Queue(len)
    this.helpQueue = new Queue(len)
  }
  push(obj) {
    this.dataQueue.enqueue(obj)
  }
  pop() {
    while(this.dataQueue.curLen > 1) {
      this.helpQueue.enqueue(this.dataQueue.dequeue())
    }
    this.swap()
    return this.helpQueue.dequeue()
  }
  peak() {
    while(this.dataQueue.curLen > 1) {
      this.helpQueue.enqueue(this.dataQueue.dequeue())
    }
    this.swap()
    return this.helpQueue.front()
  }
  swap() {
    let tmp = this.dataQueue
    this.dataQueue = this.helpQueue
    this.helpQueue = tmp
  }
}

let stack = new QueueStack(3)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
console.log(stack.peak())