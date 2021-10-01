function depositProfit(deposit, rate, threshold) {
  let count = 0;
  let total = deposit
  while (total < threshold) {
    total = total + total * (rate / 100);
    count = count + 1;
  }
  return count;
}
