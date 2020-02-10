/*
* 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
* 思路：快指针（步长2）、慢指针（步长1），快慢指针在环里相遇，此时让慢指针回到head，两者步长为1同时前进，最终在环节点相遇。
*
* 证明：
* a 为入环前长度，b 为在环里相遇时走过的长度，c 为环长度 - b
* a + (b + c) * k + b = a + b
* */

// https://www.nowcoder.com/profile/163334/codeBookDetail?submissionId=1512740

function EntryNodeOfLoop(pHead)
{
  if(!pHead || !pHead.next || !pHead.next.next) return null
  let fast = pHead.next.next, low = pHead.next;
  while(fast && low) {
    if(!fast.next) return null
    if(fast !== low) {
      fast = fast.next.next
      low = low.next
    } else {
      break
    }
  }
  if(!fast || !low) return null
  low = pHead
  while(fast !== low) {
    fast = fast.next
    low = low.next
  }
  return fast
}
