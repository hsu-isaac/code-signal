/* Implement the DoubleSet data structure described below.

A DoubleSet is a collection whose members are integers, and who can have one or two of each member. We express them below in
maplike notation, ie the DoubleSet that has two 1s, one -3, and one 0 is represented as

{{1: 2}, {-3: 1}, {0: 1}}

If a DoubleSet has two of member 1, we may not add a third. If a
DoubleSet has zero of member 3, we may not take any away, because there is nothing to take away from.

We add two DoubleSets by adding each of their members, each of whose count can be no greater than two:

doubleSetOne has members

{{1: 2}, {2: 1}}

and doubleSetTwo has members

{{1: 1}, {2: 1}, {-3: 1}}

their sum is

{{1: 2}, {2: 2}, {-3: 1}}

We subtract two DoubleSets by subtracting each of their counts, where elements whose counts fall below one are removed
from the DoubleSet entirely:

doubleSetOne has members

 {{1: 2}, {2: 1}}

and doubleSetTwo has members

{{1: 1}, {2: 2}, {-3: 1}}

their difference is

{{1: 1}} */

//[{1:2}, {2:1}]

class DoubleSet {
  constructor(input) {
    let inputFormatted = {}
    for (let i = 0; i < input.length; i++) {
      for (const key in input[i]) {
        inputFormatted[key] = input[i][key]
      }
    }
    this.set = inputFormatted
  }
  plus(second) {
    let sumSet = {};
    for (const key in this.set) {
      sumSet[key] = this.set[key]
    }
    for (const key in second) {
      if (sumSet[key]) {
        sumSet[key] = sumSet[key] + second[key]
        if (sumSet[key] > 2) {
          sumSet[key] = 2;
        }
      } else {
        sumSet[key] = second[key]
      }
    }
    this.set = sumSet
  }

  minus(second) {
    let difSet = {};
    for (const key in this.set) {
      difSet[key] = this.set[key]
    }
    for (const key in second) {
      if (difSet[key]) {
        difSet[key] = difSet[key] - second[key]
        if (difSet[key] < 1) {
          delete difSet[key]
        }
      }
    }
    this.set = difSet
  }

  output() {
    let formattedOutput = [];
    for (const key in this.set) {
      let setItem = {};
      setItem[key] = this.set[key]
      formattedOutput.push(setItem)
    }
    return formattedOutput
  }
}
