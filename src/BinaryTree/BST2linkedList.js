/**
 * 将二叉搜索树转换成双向链表，不能新增节点，只能修改原有节点
 * left 表示链表的上一个节点，right 表示下一个节点
 * 
 * 思路：
 * 中序遍历二叉树，用 pre 保存上一个遍历到的节点即可
 * 
 * @param {Node} head 
 */

function Convert(head)
{
  if(!head) return null
  let stack = []
  let node = head
  let newHead = null
  let pre = null
  while(stack.length || node) {
    if(node) {
      stack.push(node)
      node = node.left
    } else {
      node = stack.pop()
      
      // 保存链表头
      if(!newHead) newHead = node
      
      // 改变节点指向
      if(pre) {
        pre.right = node
        node.left = pre
      }
      
      pre = node
      node = node.right
    }
  }
  return newHead
}