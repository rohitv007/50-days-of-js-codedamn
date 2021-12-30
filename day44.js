// TODO: Count the divisors of a number

function getDivisorsCnt(num) {
  // code below
  let count = 0;
  for (let i = 2; i <= parseInt(num / 2); i++) {
    if (num % i === 0) {
      count++;
    }
  }
  //   console.log(count+2)
  return count + 2;
  // adding 2 to count for '1 and the num itself'
}

console.log(getDivisorsCnt(54));
