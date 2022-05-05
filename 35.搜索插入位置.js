function searchPosition(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(nums[left] <= nums[right]) {
    let mid = left + Math.floor((right - left) /2 );
    if(nums[mid] > target) {
      right = mid - 1;
    } else if(nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return right + 1;
}

searchPosition([1,4,5,10], 2);
