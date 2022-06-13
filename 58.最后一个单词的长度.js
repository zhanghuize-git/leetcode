/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let array = s.trim().split(' ');
  let last = array.length - 1;
  return array[last].length;

};
// @lc code=end

