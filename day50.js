// TODO: Get the Middle Character

function getMiddle(s) {
  const len = s.length;
  const half = parseInt(len / 2);

  if (len % 2) return s.slice(half, half + 1);
  else return s.slice(half - 1, half + 1);
}

console.log(getMiddle("testing"));
