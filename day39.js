// TODO: Mixed Juices

const timeToMixJuice = (name) => {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
      return 1.5;
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
};

const limesToCut = (wedgesNeeded, limes) => {
  let count = 0;
  for (let i = 0; i < limes.length; i++) {
    // console.log(limes[i])
    if (wedgesNeeded <= 0) break;

    if (limes[i] === "small") wedgesNeeded -= 6;
    else if (limes[i] === "medium") wedgesNeeded -= 8;
    else wedgesNeeded -= 10;
    // console.log(wedgesNeeded)
    count++;
  }
  // console.log(count)
  return count;
};

const remainingOrders = (timeLeft, orders) => {
  let count = 0;
  for (let i = 0; i < orders.length; i++) {
    if (timeLeft <= 0) break;
    // console.log(orders[i])
    timeLeft -= timeToMixJuice(orders[i]);
    // console.log(timeLeft)
    count++;
  }
  // console.log(count, orders.slice(count))
  return orders.slice(count);
};
