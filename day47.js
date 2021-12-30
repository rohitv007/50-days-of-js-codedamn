// TODO: Isograms

function isIsogram(str) {
  const arr = str.trim().toLowerCase().split("");
  //  removing spaces, ignoring letter case, converting to array
  let map = new Map();
  let flag = true;

  arr.forEach((item) => {
    if (map[item]) map[item]++;
    else map[item] = 1;

    if (map[item] > 1) flag = false;
  });
  return flag;
}

console.log(isIsogram("Dermatoglyphics"));
