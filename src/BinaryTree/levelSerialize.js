/*
* 二叉树序列化（层序遍历）
* 空节点用 #
* 该节点结束用 !
* */
function stringify(head) {
  let queue = [head],
      str = ''
  while(queue.length) {
    let node = queue.shift()
    if(!node) {
      str += `#!`
      continue
    }
    str += `${node.val}!`
    queue.push(node.left)
    queue.push(node.right)
  }
  return str
}
console.log(stringify({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4
    }
  },
  right: {
    val: 3,
    left: {
      val: 5
    },
    right: {
      val: 6
    }
  }
}))

/*
* 二叉树反序列化（层序遍历）
* 将序列化的字符串parse成树结构
* */
class Node {
  constructor(val) {
    if(val === null) {
      return null
    }
    this.val = val
    this.left = null
    this.right = null
  }
}
function parse(str) {
  let arr = str.split('!')
  let p2 = 0
  let head = toNode(arr[p2++])
  let queue = [head]
  while(queue.length) {
    let node = queue.shift()
    node.left = toNode(arr[p2++])
    node.right = toNode(arr[p2++])
    if(node.left) {
      queue.push(node.left)
    }
    if(node.right) {
      queue.push(node.right)
    }
  }
  return head
}
function toNode(str) {
  if(str === '#') {
    return null
  }
  return new Node(+str)
}
