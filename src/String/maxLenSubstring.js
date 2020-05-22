/**
 * 从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。
 * 示例："abccscba"
 * 最长子串为 "scba"，输出 4
 * 
 * 思路：用 left 作为当前子串的起始位置，用 hash 存储当前出现的字符，
 * 如果当前字符未出现过，或者出现的位置 < left（说明不是在当前子串出现的），则计算当前长度，和 maxLen 比较
 * 如果当前字符在子串中出现过，更新字符出现位置，将子串的起始位置移到重复位置的后一位。
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let hash = {},
  maxLen = 0,
  left = 0

  for(let i = 0; i < s.length; i ++) {
    if(hash[s[i]] === undefined || hash[s[i]] < left) {
      hash[s[i]] = i
      let curLen = i - left + 1
      maxLen = curLen > maxLen ? curLen : maxLen
    } else {
      left = hash[s[i]] + 1
      hash[s[i]] = i
    }
  }
  return maxLen
}