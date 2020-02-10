/**
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * 示例：
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 * 思路：
 * 找出两个头结点里小的那一个作为 par 和 root，两条链表经历一个 merge 的过程，小的不断插入到 par 后，par 不断后移
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if(!l1 && !l2) return null
  if(!l1) return l2
  if(!l2) return l1
  let par, root
  if(l1.val < l2.val) {
    par = root = l1
    l1 = l1.next
  } else {
    par = root = l2
    l2 = l2.next
  }

  while(l1 && l2) {
    if(l1.val < l2.val) {
      par.next = l1
      l1 = l1.next
      par = par.next
    } else {
      par.next = l2
      l2 = l2.next
      par = par.next
    }
  }
  if(l1) {
    par.next = l1
  }
  if(l2) {
    par.next = l2
  }
  return root
};
