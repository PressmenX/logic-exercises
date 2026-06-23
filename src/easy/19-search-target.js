function searchTarget(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    let mid = ((left + right) / 2) | 0;
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

console.log(searchTarget([-1, 0, 3, 5, 9, 12], 9));
console.log(searchTarget([-1, 0, 3, 5, 9, 12], -2));
console.log(searchTarget([-5], -5));
