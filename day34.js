// TODO: Write a program to find the most frequent item of an array

// ! MUST KNOW CONCEPTS - MAP AND FREQUENCY

function mostFreq(arr) {
  // write your code here
  const map = new Map();
  let val, count = 0;

  arr.forEach((item) => {
    if (map[item]) map[item]++;
    else map[item] = 1;

    if (map[item] > count) {
      val = item;
      count = map[item];
    }
  });
  // console.log(map)
  return `${val} ${count}`;
}

const arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

console.log(mostFreq(arr));
