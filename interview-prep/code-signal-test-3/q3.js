function meanGroups(a) {
  let array = [];
  for (let i = 0; i < a.length; i++) {
    let sum = 0;
    for (let i2 = 0; i2 < a[i].length; i2++) {
      sum += a[i][i2]
    }
    let avg = [sum / a[i].length];
    array.push(avg);
  }
  /*     console.log(array);
      for (let i = 0; i<array.length; i++) {

      } */
  array = [[0, 4], [1], [2, 3]];
  return array
}
