/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let left = BigInt(0), right = BigInt(num);
  while (left <= right) {
    let mid = (left + right) / BigInt(2);
    let res = BigInt(mid * mid);
    if (res == num) {
      return true;
    } else if (res < num) {
      left = mid + BigInt(1);
    } else {
      right = mid - BigInt(1);
    }
  }
  return false;
};
// @lc code=end

