
// for loop through string
// check for first closing bracket value
// string[i-1] === equivalent open bracket
// slice confirmed bracket pairs


var isValid = function (s) {
  let string = s
  while (string) {
    string1 = ''
    string2 = ''
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ']') {
        if (string[i - 1] === '[') {
          string1 = string.slice(0, i - 1)
          string2 = string.slice(i + 1)
          console.log('1', string1)
          console.log('2', string2)
          string = string1 + string2;
          break;
        } else {
          return false;
        }
      }
      if (string[i] === '}') {
        if (string[i - 1] === '{') {
          string1 = string.slice(0, i - 1)
          string2 = string.slice(i + 1)
          console.log('1', string1)
          console.log('2', string2)
          string = string1 + string2;
          break;
        } else {
          return false;
        }
      }
    }
  }
  return true;
};
