const getUnique = (arr) => {
  let result = [];
  let pos = 0;
  for (let i = 0; i < arr.length; i++) {
    let isExists = false;

    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isExists = true;
        break;
      }
    }

    if (isExists === false) {
      result[pos] = arr[i];
      pos++;
    }
  }

  return result
};


console.log(getUnique([1, 1, 2, 2, 3])); // [1, 2, 3]
