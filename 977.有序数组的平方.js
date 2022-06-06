/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

//思路：双指针，用一个和nums长度一样大的数组来存放平方后的结果
//一个指针指向数组开头，一个指向数组末尾
//设置一个新的指针指向新数组的末尾
//比较nums中开头和末尾两个数平方后的大小
//并赋给新数组末尾


// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let n = nums.length;
  let res = new Array(n).fill(0);
  let i = 0, j = n - 1, k = n -1;
  while (i <= j) {
    if (nums[i] * nums[i] < nums[j] * nums[j]) {
      res[k--] = nums[j] * nums[j];
      j--;
    } else {
      res[k--] = nums[i] * nums[i];
      i++;
    }
  }
  return res;
};
// @lc code=end

