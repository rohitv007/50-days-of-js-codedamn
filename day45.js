// TODO: Find The Parity Outlier

const countOdd = (integers) => {
  let odd = 0;
  integers.forEach((i) => {
    if (i % 2) odd++;
  });
  return odd;
};

const countEven = (integers) => {
  let even = 0;
  integers.forEach((i) => {
    if (i % 2 === 0) even++;
  });
  return even;
};

function findOutlier(integers) {
  let odd = countOdd(integers);
  let even = countEven(integers);
  // console.log(odd, even)

  // if odd elements are more
  // filter them out, keeping even elements
  // and vice versa
  let arr =
    odd > even
      ? integers.filter((i) => i % 2 === 0)
      : integers.filter((i) => i % 2);

  // console.log(arr, parseInt(arr, 10))
  return parseInt(arr, 10);
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
