/**
 * 找两个节点的公共父节点
 * 
 * 思路：随便找一个节点，判断是否 contains 另一个节点，不断往上查找
 * 注意考虑找到最后依然不存在公共父节点，oNode1 节点为空的情况
 * @param {Node} oNode1 
 * @param {Node} oNode2 
 */

function commonParentNode(oNode1, oNode2) {
  while(oNode1) {
      if(oNode1.contains(oNode2)) {
          return oNode1
      } else {
          oNode1 = oNode1.parentNode
      }
  }
}