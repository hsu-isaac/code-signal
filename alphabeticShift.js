function alphabeticShift(inputString) {
  let newWord = ''
  for (let i = 0; i < inputString.length; i++) {
    const code = inputString.codePointAt(i)
    if (code !== 122) {
      const letter = String.fromCharCode(code + 1)
      newWord = newWord + letter
    }
    else {
      newWord = newWord + 'a'
    }
  }
  return newWord;
}
