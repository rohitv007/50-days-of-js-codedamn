// TODO: Write a program to reverse a given integer number

const num = 3849;

function reverseGivenInteger(num) {
  // write your solution here
  // * METHOD-1
  let rev = 0;
  while (num !== 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = parseInt(num / 10);
  }
  return rev;

  // * METHOD-2
  // * return num.toString().split('').reverse().join('')
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`);
