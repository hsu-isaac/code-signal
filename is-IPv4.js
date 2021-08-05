function isIPv4Address(inputString) {
  var bool = true;
  var array = inputString.split('.');
  for (var i = 0; i < array.length; i++) {
    if (array[i] === '') {
      bool = false;
    }
    for (var e = 0; e < array[i].length; e++) {
      if (isNaN(array[i][e]) === true) {
        bool = false;
      }
    }
    if (array[i].length > 1) {
      if (array[i][0] === '0') {
        bool = false;
      }
    }
    if (parseInt(array[i]) > 255) {
      bool = false;
    }
  }
  if (array.length !== 4) {
    bool = false;
  }
  return bool;
}
