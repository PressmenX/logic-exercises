const freqCounter = (arr) => {
  let buffer= {}
  let highest = arr[0]
  for (let i = 0; i < arr.length; i++) {
   buffer[arr[i]] = (buffer[arr[i]] || 0) +1
   highest = buffer[arr[i]] > buffer[highest] ? arr[i] : highest
  }

  return {element : highest, count : buffer[highest]}
}

console.log(freqCounter([1, 3, 2, 3, 4, 3, 2]));
console.log(freqCounter(['a', 'b', 'a', 'c', 'b', 'a']));
console.log(freqCounter([5, 5, 4, 4]));