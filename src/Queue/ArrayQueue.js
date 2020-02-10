class ArrayQueue {
  constructor(len) {
    this.maxLen = len
    this.start = this.end = 0
    this.curLen = 0
    this.queue = []
  }
  enqueue(obj) {
    if(this.curLen++ === this.maxLen) {
      throw new Error(`Queue is full`)
    }
    this.queue[this.end++] = obj
    this.end = this.end === this.maxLen ? 0 : this.end
    this.curLen
  }
  dequeue() {
    if(this.curLen-- === 0) {
      throw new Error(`Queue is empty`)
    }
    let ele = this.queue[this.start]
    delete this.queue[this.start++]
    this.start = this.start === this.maxLen ? 0 : this.start
    return ele
  }
  front() {
    if(this.curLen === 0) {
      throw new Error(`Queue is empty`)
    }
    return this.queue[this.start]
  }
}
module.exports = ArrayQueue

// for test
// let queue = new ArrayQueue(3)
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.dequeue()
// console.log(queue)
// console.log(queue.front())
