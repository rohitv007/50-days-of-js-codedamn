// TODO: WeIrD StRiNg CaSe

function toWeirdCase(string) {
  const arr = string.split("");
  // console.log(arr)

  for (let i in arr) {
    arr[i] = i % 2 ? arr[i].toLowerCase() : arr[i].toUpperCase();
  }
  // console.log(arr.join(''))
  return arr.join("");
}

console.log(
  `The weird case of ${"A test case"} is ${toWeirdCase("This is a test")}`
);
