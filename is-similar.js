function areSimilar(a, b) {
  var similar = false;
  var counter = 0;
  var testArray = [];
  var testArrayB = [];
  if (a === b) {
    similar = true;
  } else {
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        counter++;
        testArray.push(a[i]);
        testArrayB.push(b[i]);
      }
    }
    if (counter > 2) {
      similar = false;
    } else if (testArray[0] === testArrayB[1] && testArray[1] === testArrayB[0]) {
      similar = true;
    } else {
      similar = false;
    }
  }
  if (a.sort !== b.sort) {
    similar = false;
  }
  return similar;
}
