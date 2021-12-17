// TODO: Convert given array of digits of a base to another asked base

/**
 *
 * @param {number[]} digits Array of valid digits of baseA
 * @param {number} baseA base a
 * @param {number} baseB base b in which digits are to be converted
 * @returns {number[]} Array of valid digits of baseB
 */

const convertDigitsToAskedBase = (digits, baseA, baseB) => {
  // array to decimal number
  let num = 0;
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    num += digits[i] * Math.pow(baseA, len - i - 1);
  }

  // decimal to hexadecimal
  hexString = num.toString(baseB);

  // key-value pairs for hexa numbers
  const obj = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };

  // covert alphabets to numerals
  const hex = hexString.split("");
  for (let i of hex) {
    if (obj[i]) {
      let idx = hex.indexOf(i);
      hex[idx] = obj[i];
    }
    i = Number(i);
  }
  // console.log(hex)
  // string numbers in array to number
  const res = hex.map((i) => Number(i));

  return res;
};

console.log(convertDigitsToAskedBase([5, 8], 10, 16));
