var lengthOfLastWord = function (s) {
  const array = s.split(' ');
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i]) {
      return array[i].length
    }
  }
};

var lengthOfLastWord = function (s) {
  let string = s.trim();
  const array = string.split(' ');
  return array[array.length - 1].length
};
