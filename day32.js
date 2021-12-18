// TODO: Write a program to find the greatest common divisor (gcd) of two positive numbers.

// ! MUST KNOW CONCEPTS - GCD AND RECURSION 

function gcd(a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);
}

const a = 12;
const b = 4;

console.log("The GCD of " + a + " ", b + " is " + gcd(a, b));
