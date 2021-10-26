function longestDigitsPrefix(inputString) {
  let word = '';
  for (let i = 0; i < inputString.length; i++) {
    if (Number.isInteger(parseInt(inputString[i]))) {
      word = word + inputString[i]
    } else {
      break;
    }
  }
  return word;
}
