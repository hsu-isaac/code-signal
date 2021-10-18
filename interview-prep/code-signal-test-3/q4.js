function findTheTriples(arr, queries) {
  let array = [];
  for (let i = 0; i < queries.length; i++) {
    if (queries[i] < 0) {
      array.push(0)
      continue;
    }
    if (queries[i][0] > queries[i][1] || queries[i][0] === queries[i][1]) {
      array.push(0);
      continue;
    }
    if (queries[i][1] > queries[i][2] || queries[i][1] === queries[i][2]) {
      array.push(0);
      continue;
    }
    if (queries[i][2] > arr.length) {
      array.push(0);
      continue;
    }
    array.push(1);
  }
  return array;
}
