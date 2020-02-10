/*
* 【题目】 给定一个链表的头节点head，请判断该链表是否为回 文结构。例如： 1->2->1，返回true。
* 进阶： 时间复杂度O(N)，额外空间复杂度O(1)。
*/

// 方法1：遍历一遍链表，入栈，第二次遍历，不断弹出栈顶元素和链表元素比较。
// 时间复杂度O(n)
function isPlalinDrome1(head) {
  let node = head
  let stack = [head]
  while(node.next) {
    node = node.next
    stack.push(node)
  }
  node = head
  while(node) {
    if(node.val !== stack.pop().val) {
      return false
    }
    node = node.next
  }
  return true
}

// 方法2：遍历一遍链表，准备快慢指针，快指针步长为2，慢指针步长为1。快指针遍历到底时，慢指针走到链表中间，将链表后半部分入栈。
// 进行第二次遍历，不断弹出栈顶元素和链表元素比较。
// 时间复杂度O(n)，空间复杂度O(n/2)
function isPlalinDrome2(head) {
  let p1 = p2 = 0 // p1 为快指针，p2 为慢指针
  let node = head
  if(!node) return true
  while(node.next && node.next.next) {
    p1 += 1
    p2 += 2
    node = node.next
  }
  let stack = []
  while(node) {
    stack.push(node)
    node = node.next
  }
  node = head
  while(stack.length) {
    if(stack.pop().val !== node.val) {
      return false
    }
    node = node.next
  }
  return true
}

// for test
let linkedList = {
  head: {val: 1, next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 2,
        next: {
          val: 1,
          next: null
        }
      }
    }
  }}
}
console.log(isPlalinDrome2(
  linkedList.head
))