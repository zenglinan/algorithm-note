/*
* 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
1 ≤ m ≤ n ≤ 链表长度。

示例:

输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL

* 思路：如果 m = 1 时，情况和普通翻转链表一样，如果 m > 1 时，则是翻转链表中间的一部分，所以在开头加上一个头结点，统一按第二种情况处理
* 找到 m - 1, m, n, n + 1 四个节点，n 节点的 next 指向 null，
* m 节点作为循环的起始节点(cur = mNode)，n + 1 节点作为目标 next 节点(tar = n+1Node)
* 循环：当 cur 不为 null 的时候，不断将 cur.next 指向 tar，tar不断往前移，cur不断往后移
* 循环完：2 -> 3 -> 4 -> 5 变成了 4 -> 3 -> 2 -> 5，只需要将 m - 1 节点连起来即可
* */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var reverseBetween = function(head, m, n) {
  let headNode = new ListNode(0)  // 作为新的头节点
  headNode.next = head
  let p = headNode, q = headNode
  while(--m) {
    p = p.next  // m - 1 节点
  }
  while(n--) {
    q = q.next // n 节点
  }
  let cur = p.next  // m 节点
  let tar = q.next  // n + 1 节点
  q.next = null
  while(cur) {
    let tmp = cur.next
    cur.next = tar
    tar = cur
    cur = tmp
  }
  p.next = q
  return headNode.next
}