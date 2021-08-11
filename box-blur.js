function boxBlur(image) {
  let sum;
  let result = new Array();
  let value = new Array();

  for (let i = 0; i < image.length - 2; i++) {
    for (let a = 0; a < image[0].length - 2; a++) {
      sum = 0;
      for (let e = i; e < 3 + i; e++) {
        for (let o = a; o < 3 + a; o++) {
          sum += image[e][o];
        }
      }
      value[a] = Math.floor(sum / 9);
    }
    result[i] = value;
    value = [];
  }
  return result;
}
