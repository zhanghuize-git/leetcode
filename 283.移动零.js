/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let slow = 0;
  for(let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] != 0) {
      let swap = nums[slow];
      nums[slow] = nums[fast];
      nums[fast] = swap;
      slow++;
    }
  }
};
// @lc code=end

