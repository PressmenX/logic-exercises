function findUniqueSignal(signals) {
  const temp = {};
  let uniqueCount = 0;
  let unique = "";

  for (let i = 0; i < signals.length; i++) {
    if (temp[signals[i]] === undefined) {
      temp[signals[i]] = "unique";
    } else {
      temp[signals[i]] = "not unique";
    }
  }

  for (const signal in temp) {
    if (temp[signal] === "unique") {
      uniqueCount++;
      unique = signal;
    }
  }

  if (uniqueCount <= 0 || uniqueCount > 1) return "there are no unique values";
  return Number(unique);
}

console.log(findUniqueSignal(4, 22, 22, 3, 3));
console.log(findUniqueSignal(4, 4, 22, 22, 3, 3));
console.log(findUniqueSignal(3, 2));
console.log(findUniqueSignal(1));
