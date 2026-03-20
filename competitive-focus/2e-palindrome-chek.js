const isPalindrome = (str) => {
  const oldStr = str.toLowerCase();
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += oldStr[(str.length-1)-i]
  }
  return newStr === oldStr
};

console.log(isPalindrome("racecar"))    // → true
console.log(isPalindrome("hello"))      // → false
console.log(isPalindrome("Katak"))      // → true
console.log(isPalindrome("javascript")) // → false