// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let count = 0;

  for(let i = 0; i < birdsPerDay.length; i++) {
    count += birdsPerDay[i];
  }

  return count;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  if (week < 0) return 0;
  
  let count = 0;
  let startIndex = (week - 1) * 7;
  let endIndex = startIndex + 7;

  // Use semicolons to separate loop sections, and stop at endIndex
  for (let j = startIndex; j < endIndex; j++) {
    count += birdsPerDay[j];
  }

  // Return statement MUST sit outside the loop block
  return count;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for(let i = 0; i < birdsPerDay.length; i++) {
    if(i%2 === 0) {
      birdsPerDay[i] = birdsPerDay[i] + 1;
    }
  }

  return birdsPerDay;
}
