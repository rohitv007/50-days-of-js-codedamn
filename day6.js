// TODO: Write a function to truncate a string to a certain number of words

const str = "JavaScript is simple but not easy to master";
const wordLimit = 3;

function truncateWithWordLimit(str, wordLimit) {
  // write your solution here
  const strArr = str.split(" ");
  const newArr = strArr.slice(0, wordLimit);
  return newArr.join(" ");
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`);
