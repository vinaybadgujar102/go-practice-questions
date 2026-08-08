//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
   const giga = 10 ** (9 + 3) ;
    const newDate = date.getTime() + giga;
  return new Date(newDate)
};
