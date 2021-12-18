// TODO: Vowel Count

// ! KNOWLEDGE AND CONCEPTUAL

function getCount(str) {
  // enter your magic here
  let regex = /[aeiou]/gim;
  const vowelFunc = (str, regex) => {
    return str.match(regex)?.length ?? 0;
    // https://stackoverflow.com/questions/1072765/count-number-of-matches-of-a-regex-in-javascript
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
  };

  return vowelFunc(str, regex);
}

console.log(getCount("abraCADABRA"));
