// TODO: Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'

const str = "Xamarin";

function getTheGapX(str) {
  // write your solution here
  if (str.search("X") === -1) return -1;
  const start = str.indexOf("X");
  const end = str.lastIndexOf("X");
  if (start === end) return 0;
  return Math.abs(end - start);
}

console.log(`Gap between the X's: ${getTheGapX(str)}`);
