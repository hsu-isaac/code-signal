var isValid = function(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(')');
    }
    if (s[i] === '{') {
      stack.push('}');
    }
    if (s[i] === '[') {
      stack.push(']');
    }
    if (s[i] === stack[stack.length - 1]) {
      stack.pop();
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
}
