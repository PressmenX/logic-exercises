const filterEven = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) result[result.length] = arr[i];
  }
  return result;
};

console.log(filterEven([1, 2, 3, 4, 5, 6]));    // [2, 4, 6]
console.log(filterEven([7, 11, 3]));            // []
console.log(filterEven([0, 1, 2]));             // [0, 2]
console.log(filterEven([]));                    // []
