/*
* 输入一个链表，输出该链表中倒数第k个结点。
* */

function FindKthToTail(head, k)
{
  // p1比p2先走k-1步，然后一起走，步长为1。
  // 等p1走到最后一个节点时，p2与他相差k-1，即为所求
  if(k < 0 || !head || k === 0) return null
  let p1 = p2 = head
  let index = 0
  while(index < k - 1) {
    p1 = p1.next
    index++
    if(p1 === null) return null
  }
  while(p1.next) {
    p1 = p1.next
    p2 = p2.next
  }
  return p2
}
