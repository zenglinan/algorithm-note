/**
 * 求无重复字符的最长子串的长度
 * 
 * 思路：滑动窗口。
 * 循环字符串，每次判断当前字符是否在 hash 中出现过，
 * 如果有，判断是否上次出现的位置在 left 的左边（已经滑过去的部分），如果不是则滑动 left 至 上次的位置+1
 * 每次计算一下当前长度，得到最大的长度
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0,
      max = 0,
      hash = {};
  for(let i = 0; i < s.length; i ++) {
    if(hash[s[i]] !== undefined) {
      left = Math.max(left, hash[s[i]] + 1)
    }
    hash[s[i]] = i
    max = Math.max(max, i - left + 1)
  }
  return max
};