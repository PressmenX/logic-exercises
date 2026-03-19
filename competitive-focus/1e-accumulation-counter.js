const sumAll = numbers => {
    let total = 0
    if (numbers.length <= 0) return total
    for(let i = 0;i <numbers.length;i++){
        total += numbers[i]
    }
    return total
}


console.log(sumAll([3, 7, 2, 9, 4]))  // 25
console.log(sumAll([1, 1, 1, 1]))     // 4
console.log(sumAll([10, 20, 30]))     // 60
console.log(sumAll([]))               // 0