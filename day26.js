// TODO: Find the odd int

function findOdd(arr) {
  const count = {};
  let res;

  for (const num of arr) {
    count[num] = count[num] ? count[num] + 1 : 1;
  }
  console.log(count);

  for (const [key, value] of Object.entries(count)) {
    // console.log(`${key} occurs => ${value} times`)
    if (value % 2) {
      res = parseInt(key);
    }
  }
  return res;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
