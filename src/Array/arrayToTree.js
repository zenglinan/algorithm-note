/**
 * 将扁平数组转为树形数组
 * 
 */
let list =[
  {id:1,name:'部门A',parentId:0},
  {id:2,name:'部门B',parentId:0},
  {id:3,name:'部门C',parentId:1},
  {id:4,name:'部门D',parentId:1},
  {id:5,name:'部门E',parentId:2},
  {id:6,name:'部门F',parentId:3},
  {id:7,name:'部门G',parentId:2},
  {id:8,name:'部门H',parentId:4}
];

function convertToTree(arr) {
  let res = []
  let hash = arr.reduce((pre, item) => (pre[item.id] = item, pre), {})

  for(let item of arr) {
    if(item.parentId === 0) {
      res.push(item)
    } else {
      let parent = hash[item.parentId]
      parent.children = parent.children || []
      parent.children.push(item)
    }
  }

  return res
}

console.log(convertToTree(list))