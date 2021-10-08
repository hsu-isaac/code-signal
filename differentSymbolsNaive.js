function differentSymbolsNaive(s) {
  let count = 0;
  let unique = [];
  for (let i = 0; i < s.length; i++) {
    if (unique.indexOf(s[i]) === -1) {
      unique.push(s[i]);
      count++
    }
  }
  return count;
}
