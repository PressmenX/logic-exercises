function countWords(s: string) {
  const words = s.split(" ")
  return words.filter(c => c !== "").length
}

console.log(countWords("hello    world"));
console.log(countWords(""));
console.log(countWords("  "));
console.log(countWords(" byee byee "));

