function firstUniqueChar(s: string) {
  const word = s.trim();
  if (word.length === 0) return -1;

  const map: Record<string, number> = {};

  for (const char of word) {
    map[char] = (map[char] ?? 0) + 1;
  }

  for (let i = 0; i < word.length; i++) {
    if (map[word[i]!] === 1) return i    
  }

  return -1;
}

console.log(firstUniqueChar(""));
console.log(firstUniqueChar("hello"));
console.log(firstUniqueChar("katak"));
console.log(firstUniqueChar("lili"));

