function isBeautifulString(input) {
  let arr = new Array(26).fill(0);
  for (let i = 0; i < input.length; i++) {
    arr[input[i].charCodeAt(0) - 97]++;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) return false;
  }
  return true;
}
