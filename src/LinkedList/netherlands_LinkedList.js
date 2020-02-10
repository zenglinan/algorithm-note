/*
* 给定一个单向链表的头节点head，节点的值类型是整型，再给定一个整数pivot，将链表划分为大于、等于、小于区域。
*/

function netherlangs(head, pivot) {
  let node = head
  if(!node) return [0, 0]
  
  // 遍历链表填入数组
  let temp = []
  while(node) {
    temp.push(node.val)
    node = node.next
  }
  
  // 对数组进行partition
  let less = -1,
      more = temp.length,
      cur = 0
  while(cur < more) {
    if(temp[cur] < pivot) {
      swap(temp, ++less, cur++)
    } else if(temp[cur] > pivot) {
      swap(temp, --more, cur)
    } else {
      cur++
    }
  }
  
  // 将数组元素填充入链表
  node = head
  while(temp.length) {
    node.val = temp.shift()
    node = node.next
  }
}

function swap(arr, a, b) {
  let tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

let linkedList = { 
  head: {
    val: 10,
    next: {
      val: 6,
      next: {
        val: 0,
        next: {
          val: 3,
          next: {
            val: 9,
            next: {
              val: 4,
              next: {
                val: 4,
                next: null
              }
            }
          }
        }
      }
    }
  } 
}
console.log(netherlangs(
  linkedList.head,
  4
))
