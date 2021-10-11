/* you're given an unordered list of integers in an array
you can only og up or down by +-2 per move
what is the minimum number of moves to create pairs of the same number?
if it is not possible, return -1

example
[1,2,3,4] => [3,3], [4,4] moves = 2 because 1+2=3 and 2+2=4
[3,4,6] => -1 because no valid pairs for 3: 4+2=6 but 3 has no pair to match to
[4,6,2,8] => 2 because 2+2=4, 6+2=8; if you match 4,6 you get 4 moves 4+2=6 but 2+2+2+2=8*/


function twoPairs(myList) {
  if (myList.length % 2 !== 0) {
    return -1
  }
  myList.sort(function(a, b) {
    return a - b;
  })
  let counter = 0;
  while (myList.length) {
    let item = myList[0]
    while (item < myList[myList.length - 1]) {
      item += 2;
      counter++;
      if (myList.indexOf(item)) {
        const index = myList.indexOf(item)
        myList.splice(index, 1);
        myList.splice(0, 1);
        break;
      }
    }
    if (item > myList[myList.length - 1]) {
      return -1
    }
  }
  return counter;
}

/* inputs with odd length should return -1
sort list in ascending order [2,4,6,8]
 */
