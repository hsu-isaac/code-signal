function avoidObstacles(inputArray) {
  for (var n = 1; ; n++) {
    if (inputArray.every(x => x % n)) {
      return n
    }
  }
}
