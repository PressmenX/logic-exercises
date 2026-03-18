const maxIndex = (arr) => {
  let maxVal = arr[0];
  let maxIdx = 0;
  for (let i=0;i < arr.length;i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
      maxIdx = i;
    }
  }
  console.log(maxIdx, maxVal);
};

maxIndex([3, 7, 2, 9, 4])  // 3  → angka 9 ada di index ke-3
maxIndex([1, 5, 8, 2, 6])  // 2  → angka 8 ada di index ke-2
maxIndex([10, 3, 7, 4])    // 0  → angka 10 ada di index ke-0