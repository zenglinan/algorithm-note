/**
 *  给定两个字符串s1，s2，s2中出现的字符从s1中删除
 */


function deleteS1FromS2(s1, s2) {
  for(let i = 0; i < s2.length; i ++) {
    let reg = new RegExp(s2[i], 'g')
    if(reg.test(s1)) {
      s1 = s1.replace(reg, "")
    }
  }
  return s1
}

// for test
console.log(deleteS1FromS2("abcdef123asgyj432", "1345"))