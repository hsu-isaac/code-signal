function sumOfReversed(arr) {
  //reverse int
  let b = [];
  for (let i = 0; i < arr.length; i++) {
    const reversed = arr[i].toString().split('').reverse().join('');
    b.push(reversed);
  }
  console.log(b);
  let sum = 0;
  for (let i = 0; i < b.length; i++) {
    if (b[i][0] !== '0') {
      b[i] = parseInt(b[i])
      sum += b[i]
    } else {
      let counter = 1;
      for (i2 = 1; i2 < b[i].length; i2++) {
        if (b[i][i2] === '0') {
          counter++;
        } else {
          break;
        }
      }
      b[i] = parseInt(b[i]) * (10 ** counter);
      sum += b[i]
    }
  }
  return sum;
}

// first must reverse numbers
// if digits begin with zero, remove from front and multiply number by 10
// add reversed numbers
