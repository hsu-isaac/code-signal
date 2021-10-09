function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let count = 0;
  let height = 0;
  while (height < desiredHeight) {
    count++
    height += upSpeed;
    if (height >= desiredHeight) {
      return count;
    }
    height -= downSpeed;
  }
  return count;
}
