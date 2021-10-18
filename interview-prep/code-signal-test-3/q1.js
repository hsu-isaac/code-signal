function isZigzag(numbers) {
  let array = [];
  for (let i = 0; i < numbers.length - 2; i++) {
    if (numbers[i] > numbers[i + 1]) {
      if (numbers[i + 1] < numbers[i + 2]) {
        array.push(1);
      } else {
        array.push(0);
      }
    }
    if (numbers[i] < numbers[i + 1]) {
      if (numbers[i + 1] > numbers[i + 2]) {
        array.push(1);
      } else {
        array.push(0)
      }
    }
    if (numbers[i] === numbers[i + 1]) {
      array.push(0)
    }
  }
  return array;
}
