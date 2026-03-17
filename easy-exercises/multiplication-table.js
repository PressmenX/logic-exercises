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
// 1x1=1	1x2=2	1x3=3
// 2x1=2	2x2=4	2x3=6
// 3x1=3	3x2=6	3x3=9
