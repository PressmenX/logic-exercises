const findMax = (arr) => {
  let max = arr[0]
  for (let i = 0; i < arr.length; i++) {
   max = arr[i] > max ? arr[i] : max
  }

  return max
}

console.log(findMax([1, 5, 3]));    // 5
console.log(findMax([-10, -5, -2])); // -2