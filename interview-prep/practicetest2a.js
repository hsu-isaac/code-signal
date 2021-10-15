function boundedRatio(a, l, r) {
  let b = [];
  for (let i = 0; i < a.length; i++) {
    for (let x = l; x <= r; x++) {
      if (a[i] === (i + 1) * x) {
        b.push(true)
        break;
      }
    }
    if (!b[i]) {
      b.push(false);
    }
  }
  return b;
}

/* conditions:
        a[i] = (i+1)*x
        l<=x<=r


    create new array
    loop through provided array
    2 conditions to push true or false into new array

*/
