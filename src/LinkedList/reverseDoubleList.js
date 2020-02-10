/*
* 翻转双向链表
*/

function reverseDoubleList(head) {
  let pre = null,
      next = null
  while(head) {
    next = head.next
    head.next = pre
    head.prev = next
    pre = head
    head = next
  }
  return pre
}


reverseDoubleList()