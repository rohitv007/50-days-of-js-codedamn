// TODO: Mexican Wave

// ! A GOOD QUESTION

function wave(str) {
  const arr = str.split("");
  const myArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== " ") {
      myArr.push(
        `${str.slice(0, i)}${arr[i].toUpperCase()}${str.slice(
          i + 1,
          str.length
        )}`
      );
    }
  }
  // console.log(myArr)
  return myArr;
}

console.log(wave("hello"));
