/**
 * 判断一颗二叉树是否镜像对称
 * https://leetcode-cn.com/problems/symmetric-tree/
 * 
 * 思路：
 * 每次提取两个结点并比较它们的值。然后，将两个结点的左右子结点按镜像的顺序插入队列中。
 * 当队列为空时，或者我们检测到当前两个节点不对称时，结束。
 * 
 * @param {Node} root 
 */

var isSymmetric = function(root) {
  let queue = [root, root]
  let left, right = null
  while(queue.length) {
    left = queue.shift()
    right = queue.shift()

    if(!left && !right) continue  // 两个 null
    if(!left || !right) return false  // 其中一个为 null
    if(left.val !== right.val) return false

    queue.push(left.left, right.right)
    queue.push(left.right, right.left)
  }
  return true
};