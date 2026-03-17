const multiplicationTable = n => {
    let result = ""
    for(let i = 1; i <= n;i++){
        let row = ""
        for(let j=1;j <=n;j++){
            if (j > 1) row += "\t"
            row += i + "x" + j + "=" + (i*j)
        }
        result += row + (i === n ? "" : "\n")
    }
    console.log(result);
}

multiplicationTable(3)