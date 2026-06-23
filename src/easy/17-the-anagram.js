function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] in map && map[t[i]] !== 0) {
      map[t[i]]--;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("anagram", "ganaram"));
console.log(isAnagram("car", "cars"));
console.log(isAnagram("cat", "rat"));
