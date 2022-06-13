/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let set = new Set(['a', 'e','i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let strArray = s.split('');
  let left = 0;
  let right = strArray.length - 1;
  while (left < right) {
    if (set.has(strArray[left])) {
      if (set.has(strArray[right])) {
        temp = strArray[left];
        strArray[left] = strArray[right];
        strArray[right] = temp;
        left++;
      }
      right--;
    } else {
      left++;
    }
  }
  return strArray.join('');
};
// @lc code=end

