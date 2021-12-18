// TODO: Write Number in Expanded Form

// ! A GOOD QUESTION

function expandedForm(num) {
  let arr = num.toString().split("");

  arr = arr.map((item) => parseInt(item));
  // console.log(arr)

  const len = arr.length;
  for (let i = 0; i < len; ++i) {
    arr[i] = arr[i] * Math.pow(10, len - i - 1);
  }
  // console.log(arr)
  return arr.join("+").toString();
}

console.log(expandedForm(734));
