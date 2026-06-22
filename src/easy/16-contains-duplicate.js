function containsDuplicate(nums) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      return true;
    }

    map[nums[i]] = i;
  }

  return false;
}

console.log(containsDuplicate([1, 2, 2, 3]));
console.log(containsDuplicate([1, 5, 10]));
console.log(containsDuplicate([0, 5, 10, 15, 15]));
