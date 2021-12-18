// TODO: Luhn algorithm

// ! A GOOD QUESTION

const valid = (string) => {
  let str = string.replace(/\s+/g, "");
  let resString = "";

  if (str.length <= 1) {
    return false;
  } else {
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        let num = parseInt(str[i]) * 2;
        if (num > 9) {
          num = num - 9;
        }
        resString += `${num.toString()}`;
      } else {
        resString += `${str[i]}`;
      }
    }
    // console.log(resString)

    let stringSum = resString
      .split("")
      .map((num) => parseInt(num))
      .reduce((total, num) => total + num, 0);
    // console.log(stringSum)

    return stringSum % 10 ? false : true;
  }
};

console.log(valid("4539 3195 0343 6467"));
