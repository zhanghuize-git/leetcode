/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length != t.length) return false;
  let map = new Map();

  for (let n of s) {
    if (!map.has(n)) {
      map.set(n, 1);
    } else {
      map.set(n, map.get(n) + 1);
    }
  }

  for (let n of t) {
    if (map.has(n) && map.get(n) > 0) {
      map.set(n, map.get(n) - 1);
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end

