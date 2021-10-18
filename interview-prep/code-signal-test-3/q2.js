function alternatingSort(a) {
  let array = [];
  let a1 = 0
  let b = a.length - 1
  while (array.length < a.length) {
    array.push(a[a1])
    if (a1 !== b) {
      array.push(a[b])
    }
    a1++;
    b--;
  }
  if (array.length === 1) {
    return true;
  }
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
    if (array[i] === array[i + 1]) {
      return false;
    }
  }
  return true;
}
