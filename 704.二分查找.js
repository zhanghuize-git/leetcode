function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
    let mid = left + Math.floor((right - left) /2);
    if(nums[mid] > target) {
      right =  mid -1;
    } else if(nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid
    }
  }
  return -1;
}

binarySearch([1,2,3,4,5,7,9],4)