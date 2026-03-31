const sumArray = arr => {
  let sum = 0
  for(let i=0;i < arr.length;i++){
    sum += arr[i]
  }
  console.log(sum);
}

sumArray([1,2,3,4,5]) // 15
sumArray([10,20,30]) // 60
sumArray([7]) // 7