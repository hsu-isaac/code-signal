function firstDigit(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] !== ' ' && !isNaN(inputString[i])) {
      return inputString[i]
    }
  }
}
