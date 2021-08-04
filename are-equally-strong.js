function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  var equal = false;
  if ((yourLeft === friendsLeft || yourLeft === friendsRight) && (yourRight === friendsLeft || yourRight === friendsRight)) {
    equal = true;
  }
  return equal;
}
