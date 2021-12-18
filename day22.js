// TODO: Unique In Order

// ! A GOOD QUESTION

let uniqueInOrder = (iterable) => {
  //your code here - remember iterable can be a string or an array
  let myArr;
  if (typeof iterable === "string") {
    myArr = iterable.split("");
  } else {
    myArr = [...iterable];
  }

  const newArr = [];

  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] !== myArr[i + 1]) {
      newArr.push(myArr[i]);
    }
  }
  return newArr;
};

console.log(uniqueInOrder([1, 2, 2, 3, 3]));
