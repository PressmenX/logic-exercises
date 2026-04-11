const getOdds = (arr) => {
  let pos = 0
  let result = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      result[pos] = arr[i]
      pos++
    }
  }

  return result
}

console.log(getOdds([1, 2, 3, 4, 5, 6])); // [1, 3, 5]
console.log(getOdds([10, 22, 30]));      // [] (Array kosong jika tidak ada yang ganjil)