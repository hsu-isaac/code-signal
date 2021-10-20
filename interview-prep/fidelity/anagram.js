// https://www.codewars.com/kata/537400e773076324ab000262/train/javascript

function groupAnagrams(words) {
  // your turn !
  let object = {};
  for (let i = 0; i < words.length; i++) {
    if (!object[words[i].length]) {
      object[words[i].length] = [words[i]]
    } else {
      object[words[i].length].push(words[i])
    }
  }
  let array = [];
  for (let i = 0; i < object[3].length; i++) {
    let wordObject = {};
    for (let i2 = 0; i2 < object[3][i].length; i2++) {
      if (!wordObject[object[3][i][i2]]) {
        wordObject[object[3][i][i2]] = 1
      } else {
        wordObject[object[3][i][i2]] += 1
      }
    }
    array.push(wordObject);
  }
  console.log(array);
  /*
  for (let i = 0; i<words.length; i++) {
    array.push({})
    console.log(array[0])
    for (let i2=0; i2<words[i].length; i2++) {
      if (!array[i][words[i][i2]]) {
        array[i][words[i][i2]] = 1
      } else {
        array[i][words[i][i2]] += 1
      }
    }
    console.log(array);
  }
  */
  return [words];
}

/*
conditions to be an anagram:
1) word has to be the same length
2) has to have the same number of each letter
if both true, then push word into array

[]
[[input[0]]
{}
loop through the input i=1
if (!object[string[i].length]) {
  object[string[i].length] = [string[i]]
} else {
  object[string[i].length].push[string[i]]
}

[{r: 1, a: 1, t: 1}, {t:1, a: 1, r: 1}, {c: 1, a: 1, t: 1}]

{3: ['rat', 'tar', 'cat' ],
4: ['star']
}

*/

/*
loop through array
object = {}
loop through each letter in the word
if (!object.letter)
  object.letter = 1
else
  object.letter++

*/
