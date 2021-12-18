// TODO: Union of Two Arrays

const unionOfArrays = (arr1, arr2) => {
  // * METHOD-1
  // const newArr = [...new Set(arr1.concat(arr2))]

  // * METHOD-2
  const newArr = [...new Set([...arr1, ...arr2])];
  return newArr;
};

console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`);
