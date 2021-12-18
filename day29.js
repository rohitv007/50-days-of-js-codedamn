// TODO: Mumbling

// ! A GOOD QUESTION

// ? With explanation

function accum(str) {
  // in map - 's' denotes each character, 'i' denotes index
  // we make each character uppercase and then
  // add lowercase characters which are repeated 'i' times

  return str
    .split("")
    .map((s, i) => `${s.toUpperCase()}${s.toLowerCase().repeat(i)}`)
    .join("-");
}

console.log(accum("ZpglnRxqenU"));
