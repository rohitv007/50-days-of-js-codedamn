// TODO: Longest Consecutive Sequence

/**
 *
 * @param {number[]} inputArray Array of numbers
 */

const longestConsecutiveSequence = (arr) => {
  // Your code here
  arr.sort((a, b) => a - b);
  // sorting the array in ascending order

  const resArr = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i - 1] - arr[i]) === 1) {
      resArr.push(arr[i]);
    }
  }
  console.log(resArr);
  return resArr.length;
};

console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
