const starSquare = n => {
    let star = ""
    for(let j =0; j < n;j++) {
        star += "*"
    }
    for(let i =0; i < n;i++) {
        console.log(star)
    }
}

starSquare(3)
starSquare(5)

