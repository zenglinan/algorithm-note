/**
 * 给定一棵二叉搜索树，请找出其中的第k小的结点。
 * 例如， （5，3，7，2，4，6，8）中，按结点数值大小顺序第三小结点的值为4。
 * 
 * 思路：中序遍历输出过程符合二叉搜索树找最小节点过程。
 * 
 * @param {Node} pRoot 
 * @param {Number} k 
 */

function KthNode(pRoot, k)
{
    if(pRoot === null || k < 0) return null
    let node = pRoot,
        stack = [],
        count = 0
    while(stack.length || node) {
        if(node) {
            stack.push(node)
            node = node.left
        } else {
            node = stack.pop()
            count ++
            if(count === k) return node
            node = node.right
        }
    }
}