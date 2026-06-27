function hasSameElement(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false;

  const map: Record<string, number> = {};
  for (const n of a) {
    map[n] = (map[n] ?? 0) + 1;
  }

  for (const n of b) {
    if (!map[n]) return false;
    map[n]!--;
  }

  return true;
}

console.log(hasSameElement([1, 2, 3, 3], [3, 1, 2, 3]));
console.log(hasSameElement([1, 2, 2], [1, 2, 3]));
console.log(hasSameElement([1, 2], [1, 2, 2]));
