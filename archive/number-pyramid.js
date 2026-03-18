const numberPyramid = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      if (j > 0) row += " ";
      row += i;
    }
    console.log(row);
  }
};

numberPyramid(4);
// 1
// 2 2
// 3 3 3
// 4 4 4 4
