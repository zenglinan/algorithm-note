function print(node) {
  console.log(node)
}


/**
 * 前序遍历
 * @param {Node} head 
 */
function fEach(head) {
  if(head === null) return
  let stack = [head]
  while(stack.length) {
    let node = stack.pop()
    print(node)
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
  }
}


/**
 * 中序遍历
 * @param {Node} head 
 */
function mEach(head) {
  if(head === null) return
  let node = head
  let stack = []
  while(stack.length || node) {
    if(node) {
      stack.push(node)
      node = node.left
    } else {
      node = stack.pop()
      print(node)
      node = node.right
    }
  }
}


/**
 * 后序遍历 
 * @param {Node} head
 */
function rEach(head) {
  let stack1 = [head],
      stack2 = []
  while(stack1.length) {
    let node = stack1.pop()
    stack2.push(node)
    node.right && stack1.push(node.right)
    node.left && stack1.push(node.left)
  }
  
  while(stack2.length) {
    print(stack2.pop())
  }
}