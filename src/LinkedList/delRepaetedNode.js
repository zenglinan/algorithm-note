/*
* 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。
* 示例：链表1->2->3->3->4->4->5 处理后为 1->2->5
* */

function deleteDuplication(pHead)
{
  let newHead = new ListNode('new head')
  newHead.next = pHead
  let pre = newHead,
      last = pHead
  while(last !== null) {
    if(last.next && last.val === last.next.val) {
      while(last.next && last.val === last.next.val) {
        last = last.next
      }
      pre.next = last.next
      last = last.next
    } else {
      last = last.next
      pre = pre.next
    }
  }
  return newHead.next
}
