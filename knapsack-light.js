function knapsackLight(value1, weight1, value2, weight2, maxW) {
  let maxValue = 0;
  if (weight1 <= maxW) {
    maxValue = value1;
  }

  if (weight1 + weight2 <= maxW) {
    return value1 + value2;
  }

  if (weight2 <= maxW) {
    return maxValue > value2 ? maxValue : value2;
  }

  return maxValue;



  // if (weight1 <= maxW && weight2 <= maxW) {
  //     if (weight1 + weight2 > maxW) {
  //         return (value1>value2 ? value1 : value2)
  //     } else {
  //         return value1+value2
  //     }
  // } else if (weight1 > maxW && weight2 <= maxW) {
  //     return value2
  // } else if (weight1 <= maxW && weight2 > maxW) {
  //     return value1
  // }
  // return 0;
}
