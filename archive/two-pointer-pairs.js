const hasPairSum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
 while (left < right) {
    const total = arr[left] + arr[right];
    if (total === target) return true

    total > target ? right-- : left++
 }
  return false;
};

console.log(hasPairSum([1, 3, 5, 7, 9], 20));
console.log(hasPairSum([1, 3, 5, 7, 9], 4));
