/**
 * 输入 URL 和 params 的 key，返回对应的 value，
 * 如果没有则返回 []，如果该 key 对应多个 value，返回所有的 value 数组
 * 
 * 思路：正则匹配，考虑 #，# 不算做 value 的一部分
 * 
 * @param {String} sUrl 
 * @param {String} sKey 
 */

function getUrlParam(sUrl, sKey) {
  const reg = /([\w%]+)=([\w%]*)&?#?/g
  let matchArr = [...sUrl.matchAll(reg)]
  let hash = {}
  
  matchArr.map(item => {
      let key = item[1],
          value = item[2]
      hash[key] = hash[key] || []
      hash[key].push(value)
  })
  
  return hash[sKey] ? hash[sKey] : []
}

console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key', 'key'))