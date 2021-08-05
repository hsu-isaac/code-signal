function arrayMaximalAdjacentDifference(inputArray) {
  var difference = 0;
  for (var i = 0; i < inputArray.length - 1; i++) {
    if (Math.abs(inputArray[i] - inputArray[i + 1]) > difference) {
      difference = Math.abs(inputArray[i] - inputArray[i + 1])
    }
  }
  return difference;
}
