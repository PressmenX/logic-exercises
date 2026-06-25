const plusOne = (arr) => {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i] + 1
  }

  return result
}

console.log(plusOne([1, 2, 3])); // [2, 3, 4]
console.log(plusOne([0, -1, 5])); // [1, 0, 6]