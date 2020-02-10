/*
* 层序打印二叉树，层与层之间“换行”
* */

function levelEach(head) {
  if(!head) return
  let queue = [head]
  let last = head,
      nlast = null
  while(queue.length) {
    let node = queue.shift()
    console.log(node.val)
    if(node.left) {
      queue.push(node.left)
      nlast = node.left
    }
    if(node.right) {
      queue.push(node.right)
      nlast = node.right
    }

    if(node === last) {
      console.log('\n')
      last = nlast
    }
  }
}

levelEach({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4
    }
  },
  right: {
    val: 3,
    left: {
      val: 5
    },
    right: {
      val: 6
    }
  }
})
