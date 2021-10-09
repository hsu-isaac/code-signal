function arrayMaxConsecutiveSum(inputArray, k) {
  let max = inputArray.slice(0, k).reduce((a, b) => a + b);
  let current = max;
  for (let i = k; i <= inputArray.length; i++) {
    current += inputArray[i] - inputArray[i - k];
    if (current > max) {
      max = current;
    }
  }
  return max;
}
