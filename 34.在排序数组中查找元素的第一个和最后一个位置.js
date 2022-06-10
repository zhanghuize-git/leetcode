/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let res = [-1, -1], left = 0, right = nums.length - 1, mid;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) break;
    if (nums[mid] > target) right = mid - 1;
    else left = mid + 1;
  }

  if (left > right) return [-1, -1];
  let i = mid, j = mid;
  while (nums[i] === nums[i - 1]) i--;
  while (nums[j] === nums[j + 1]) j++;
  return [i, j];
};
// @lc code=end

