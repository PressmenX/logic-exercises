function palindromeCheck(s) {
  let left = 0;
  let right = s.length - 1;

  while (right > left) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
}

console.log(palindromeCheck("racecar"));
console.log(palindromeCheck("beyb"));
console.log(palindromeCheck("hello "));
