// TODO: Tell if its a leap year

const isLeap = (year) => {
  // code here
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
};
