// TODO: Equal Sides Of An Array

// ! A GOOD QUESTION

function findEvenIndex(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);

  let len = arr.length;
  let l_sum = 0, r_sum = sum;

  for (let i = 0; i < len; i++) {
    r_sum -= arr[i];
    if (l_sum === r_sum) {
      console.log(l_sum, r_sum);
      return i;
    }
    l_sum += arr[i];
  }
  return -1;
}

console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
