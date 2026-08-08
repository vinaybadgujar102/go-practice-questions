// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
 switch(name) {
   case "Pure Strawberry Joy":
     return 0.5;
     break;
   case "Energizer":
     return 1.5;
     break;
     case "Green Garden":
     return 1.5;
     break;
     case "Tropical Island":
     return 3;
     break;
     case "All or Nothing":
     return 5;
     break;
     default: 
       return 2.5;
 }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  if (wedgesNeeded <= 0) {
    return 0;
  }

  let totalWedges = 0;
  let limesCut = 0;

  for (const lime of limes) {
    switch (lime) {
      case "small":
        totalWedges += 6;
        break;
      case "medium":
        totalWedges += 8;
        break;
      case "large":
        totalWedges += 10;
        break;
    }

    limesCut++;

    if (totalWedges >= wedgesNeeded) {
      break;
    }
  }

  return limesCut;
}

export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0 && orders.length > 0) {
    timeLeft -= timeToMixJuice(orders[0]);
    orders.shift();
  }

  return orders;
}
