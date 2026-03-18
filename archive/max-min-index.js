const minMax = (arr) => {
  let currMin = arr[0];
  let currMax = arr[0];

  for (let i = 0; i < arr.length; i++) {
    currMin = arr[i] < currMin ? arr[i] : currMin;
    currMax = arr[i] > currMax ? arr[i] : currMax;
  }

  console.log({min : currMin, max : currMax});
};

minMax([3, 7, 2, 9, 4])  // { min: 2, max: 9 }
minMax([1, 5, 8, 2, 6])  // { min: 1, max: 8 }
minMax([10, 3, 7, 4])    // { min: 3, max: 10 }