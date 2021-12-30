// TODO: Highest Scoring Word

// ! A GOOD QUESTION

function high(x) {
  //code your magic here
  let maxStr = "";
  let maxScore = 0;
  x.split(" ").forEach((str) => {
    let curr = 0;
    for (let i = 0; i < str.length; i++) {
      curr += str.charCodeAt(i) - 96;
    }
    if (curr > maxScore) {
      maxScore = curr;
      maxStr = str;
    }
    // console.log(str, curr)
  });
  console.log(maxStr, maxScore);
  return maxStr;
}

console.log(high("man i need a taxi up to ubud"));
