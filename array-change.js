function arrayChange(inputArray) {
  var counter = 0;
  for (var i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      while (inputArray[i + 1] <= inputArray[i]) {
        inputArray[i + 1] = inputArray[i + 1] + 1;
        counter++
      }
    }
  }
  return counter;
}
