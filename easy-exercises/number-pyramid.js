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
