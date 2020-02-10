const Stack = require('../Stack/ArrayStack')

class stackQueue {
  constructor(len) {
    this.pushStack = new Stack(len)
    this.popStack = new Stack(len)
  }
  enqueue(obj) {
    this.pushStack.push(obj)
  }
  dequeue() {
    if(!this.popStack.curLen) {
      while(this.pushStack.curLen > 0) {
        this.popStack.push(this.pushStack.pop())
      }
    }
    return this.popStack.pop()
  }
  front() {
    if(!this.popStack.curLen) {
      while(this.pushStack.curLen > 0) {
        this.popStack.push(this.pushStack.pop())
      }
    }
    return this.popStack.peak()
  }
}

// for test
let queue = new stackQueue(3)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.dequeue())
console.log(queue.dequeue())
queue.enqueue(4)
console.log(queue.dequeue())
console.log(queue.dequeue())
