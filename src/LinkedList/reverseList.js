/*
* 翻转链表
*/

function reverseList(head) {
  let pre = null,
      next = null
  while(head) {
    next = head.next
    head.next = pre
    pre = head
    head = next
  }
  return pre
}

// for test
const linkedList = {
  head: {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: 4
      }
    }
  }
}
reverseList(linkedList.head)