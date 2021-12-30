// TODO: Vehicle Purchase

const needsLicense = (kind) => {
  return kind === "car" || kind === "truck" ? true : false;
};

const chooseVehicle = (option1, option2) => {
  // * localeCompare() method compares two strings in the current locale
  // * localeCompare() method returns sort order
  // * -1, 0, or 1 (for before, equal, or after)
  let preference;
  if (option1.localeCompare(option2) === -1) {
    preference = option1;
  } else if (option1.localeCompare(option2) === 1) {
    preference = option2;
  }
  return `${preference} is clearly the better choice.`;
};

const calculateResellPrice = (originalPrice, age) => {
  if (age < 3) return originalPrice * 0.8;
  else if (age >= 3 && age <= 10) return originalPrice * 0.7;
  else return originalPrice * 0.5;
};
