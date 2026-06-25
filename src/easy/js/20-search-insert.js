function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    const mid = ((left + right) / 2) | 0;

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return left;
}

console.log(searchInsert([-1, 0, 3, 5, 9, 12], 9));
console.log(searchInsert([-1, 0, 3, 5, 9, 12], -2));
console.log(searchInsert([1, 2, 3], 4));
console.log(searchInsert([0, 1,3, 4], 2));