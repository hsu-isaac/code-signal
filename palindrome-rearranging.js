function palindromeRearranging(inputString) {
  var palindrome = true;
  var count = 0;
  var newString = inputString;
  newString = newString.split('').sort().join('');
  if (newString.length % 2 === 0) {
    for (var i = 0; i < newString.length - 1; i += 2) {
      if (newString[i] !== newString[i + 1]) {
        palindrome = false;
      }
    }
  } else if (newString.length % 2 !== 0) {
    for (var e = 0; e < newString.length - 1; e += 2) {
      if (newString[e] !== newString[e + 1]) {
        e -= 1;
        count += 1;
      }
    }
  }
  if (count > 1) {
    palindrome = false;
  }
  return palindrome;
}
