function digitDegree(n) {
  let count = 0;

  while (n > 9) {
    count++;
    let newNum = 0;
    while (n > 0) {
      newNum += n % 10;
      n = (n - (n % 10)) / 10;
    }
    n = newNum;
  }

  return count;
}
