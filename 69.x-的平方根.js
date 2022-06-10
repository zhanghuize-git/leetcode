/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 1) {return 1};
  let left = 0, right = x, mid;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    let res = mid ** 2;
    if (res < x) {
      left = mid + 1;
    } else if (res > x) {
      right = mid - 1;
    } else if (res == x) {
      return mid;
    }
  }
  return right;
};
// @lc code=end

