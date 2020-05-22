/**
 * 输入一个节点，输出中序遍历的下一个节点
 * 
 * 思路：
 * 如果该节点有右孩子，跑到右孩子处，遍历子树，找到左下角的左孩子，即为下一个节点
 * 如果节点是根节点，返回 null
 * 如果节点不是根节点，判断当前节点是否是其父亲的左孩子，如果是则父亲为下一个节点，
 * 如果不是则往父链上找到一个满足这个条件的节点，输出这个节点的父节点。
 * 
 * @param {Node} pNode 
 */


/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode)
{
    if(pNode === null) return null
    if(pNode.right) {
        pNode = pNode.right
        while(pNode.left) {
            pNode = pNode.left
        }
        return pNode
    }
    while(pNode.next) {
        if(pNode === pNode.next.left) {
            return pNode.next
        }
        pNode = pNode.next
    }
    return null
}