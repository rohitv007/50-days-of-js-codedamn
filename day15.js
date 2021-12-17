// TODO: Determine if a sentence is a pangram

const isPangram = (input) => {
  const str = input.toLowerCase().match(/[a-z]/g);
  // satisfies two conditions :-
  // alphabet used consists of ASCII letters a to z - toLowerCase()
  // input will not contain non-ASCII symbols - /[a-z]g/

  const set1 = [...new Set(str)];
  // console.log(set1)

  return set1.length === 26;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
