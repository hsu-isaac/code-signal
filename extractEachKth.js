function extractEachKth(inputArray, k) {
  newArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if ((i + 1) % k !== 0) {
      newArray.push(inputArray[i])
    }
  }
  return newArray;
}
