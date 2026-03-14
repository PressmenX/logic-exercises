const isPalindrome = str => {
    const text1 = str.toLowerCase().replace(/\s+/g, '')
    const textToArray = text1.split("").reverse()
    const text2 = textToArray.join("")
    return text1 === text2
}

console.log(isPalindrome("katak") );
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man a plan a canal Panama"));