/* 1.Write a function that capitalizes * only * the nth alphanumeric character of a string, so that if I hand you

Aspiration.com

and I ask you to capitalize every 3rd character, you hand me back

asPirAtiOn.cOm

If I ask you to capitalize every 4th character, you hand me back

aspIratIon.cOm

Please note:
- Characters other than each third should be downcased
  - For the purposes of counting and capitalizing every three characters, consider only alphanumeric
characters, ie[a - z][A - Z][0 - 9].
 */

function nCapital(string, n) {
  let lower = string.toLowerCase()
  let newString = '';
  let counter=1;

  for (let i = 0; i < lower.length; i++) {
    if (lower[i].match(/[a-z0-9]/i)) {
      if (counter % n === 0 && counter !== 0 && lower[i].match(/[a-z]/i)) {
        newString = newString + lower[i].toUpperCase()
      } else {
        newString = newString + lower[i]
      }
      counter++
    } else {
      newString = newString + lower[i]
    }
  }
  return newString
}
