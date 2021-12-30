// TODO: Is this a triangle?

function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return false;

  if (a + b > c && b + c > a && c + a > b) return true;
  else return false;
}

console.log(isTriangle(7, 14, 16));
// isTriangle(7,14,16) is actually true, test-case runs just fine but written false in there
