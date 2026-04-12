const calculateAverage = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum / arr.length || 0
}

console.log(calculateAverage([10, 20, 30])); // 20
console.log(calculateAverage([1, 2, 3, 4])); // 2.5
console.log(calculateAverage([]));           // 0