/*
* 实现链表
* */
var Node = function(val) {
  this.val = val
  this.next = null
}

var LinkedList = function() {
  this.head = null
  this.count = 0
};

LinkedList.prototype.getNode = function(index) {
  if(index < 0 || index > this.count) return null
  let node = this.head
  while(index--){
    node = node.next
  }
  return node
};

LinkedList.prototype.addHeadNode = function(node) {
  let head = this.head
  this.head = node
  this.count ++
  return node.next = head
};

LinkedList.prototype.addTailNode = function(node) {
  let headNode = this.head
  this.count ++
  if(!headNode) {
    this.head = node
    return headNode
  }
  while(headNode.next) {
    headNode = headNode.next
  }
  return headNode.next = node
}

LinkedList.prototype.insertNode = function(index, node) {
  let preNode = this.getNode(index - 1)
  if(!preNode) {
    return null
  }
  let nextNode = preNode.next
  preNode.next = node
  node.next = nextNode
  this.count ++
  return node
}

LinkedList.prototype.deleteNode = function(index) {
  let preNode = this.getNode(index - 1)
  if(!preNode || !preNode.next) {
    return null
  }
  let curNode = preNode.next
  let nextNode = preNode.next.next
  preNode.next = nextNode
  this.count --
  return curNode
};

LinkedList.prototype.toArray = function() {
  let res = []
  let node = this.head
  for(let i = 0; i < this.count; i ++) {
    res.push(node)
    node = node.next
  }
  return res
}

// for test
const linkedList = new LinkedList()
let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
let node6 = new Node(6)
linkedList.addTailNode(node1)
linkedList.addTailNode(node2)
linkedList.addTailNode(node3)
linkedList.addTailNode(node4)
linkedList.addHeadNode(node5)

console.log(linkedList.toArray())
