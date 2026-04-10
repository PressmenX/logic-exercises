const manualReverse = (arr) => {
  debugger;
  const len = arr.length;
  for (let i = 0; i < arr.length/2; i++) {
    const left = i;
    const right = len-1-i
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
  }

  return arr;
};

console.log(manualReverse([1, 2, 3, 4, 5])); 
// Output: [5, 4, 3, 2, 1]

console.log(manualReverse(["a", "b", "c"])); 
// Output: ["c", "b", "a"]