// TODO: Categorize New Member

function openOrSenior(data) {
  // your code goes below
  let res = [];
  for (const [age, handicap] of data) {
    // console.log(age, handicap)
    if (age < 55 || handicap <= 7) {
      res.push("Open");
    } else if (age >= 55 && handicap > 7) {
      res.push("Senior");
    }
  }
  // console.log(res)
  return res;
}

let output = openOrSenior([
  [59, 12],
  [55, -1],
  [12, -2],
  [12, 12],
]);

console.log(output);
