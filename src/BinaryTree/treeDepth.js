/**
 * 求二叉树深度
 * 
 * @param {Node} pRoot 
 */

 // 非递归版
function TreeDepth(pRoot)
{
    if(pRoot === null) return 0;
    let queue = [pRoot],
        depth = 0;
    while(queue.length) {
        let size = queue.length    // 对应每一层的 size
        depth ++
        for(let i = 0; i < size; i ++) {
            let node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return depth
}

// 递归版
function TreeDepth(pRode) { 
  if(!pRoot) {
    return 0
  }

  let left = 1 + TreeDepth(pRoot.left)
  let right = 1 + TreeDepth(pRoot.right)
  
  return Math.max(left, right)
}