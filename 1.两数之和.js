/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let nums1 = nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums1.length - 1;
  let res = [];
  while (left !== right) {
    let sum = nums1[left] + nums1[right];
    if (sum === target) {
      res.push(nums1[left], nums1[right]);
    } else if (sum > target) {
      right--
    } else {
      left++
    }
  }
  return res;
};
// @lc code=end

